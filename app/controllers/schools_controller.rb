require 'will_paginate/array'
require 'active_support/core_ext/enumerable'
class SchoolsController < ApplicationController
  before_action :authenticate_user, only: [:new, :edit]
  #before_action :find_coordinates, only: :index
  def index
    #code to produce 9 random records pulled from http://blog.endpoint.com/2016/05/randomized-queries-in-ruby-on-rails.html?m=1
    desired_records = 9
    count= desired_records * 3
    offset = rand([School.count - count, 1].max)
    set = School.limit(count).offset(offset).pluck(:id)
    @schools = School.includes(:reviews).find(set.sample(desired_records)).paginate(page: params[:page], per_page:10)#includes uses eager loading to solve the N + ! queries problem, reducing number of


  end

  def schools_near_you
     @lat_lng ||= cookies[:lat_lng].try(:split, "|")  || request.location.coordinates

      @schools = School.near(@lat_lng, 30).paginate(page: params[:page], per_page: 9)
  end

  def new
    @school = School.new
  end

  def create
    @school = School.new(school_params)
    if @school.save
      redirect_to school_path(@school) #using redirect_to forces rails to hit the index controller first. Render skips and just renders the view
    else
      render 'new'
    end
  end

  def edit
    @school = School.find_by(id: params[:id])
  end

  def update
    @school = School.find_by(id: params[:id])
    if @school.update_attributes(school_params)
      redirect_to @school
    else
      render 'edit'
    end
  end

  def show
    @school = School.find_by(id: params[:id])
    @first_child_class = params[:class_id]
    @second_child_class = params[:second_id]
    @current_fees
    calculate_all_fees #call to helper method
    #byebug
    #byebug
    if @school.reviews.blank? # checks if the school has any ratings, and if it doesn't, assign 0 to th average
      @average_review = 0
    else
     @average_review =  @school.reviews.average(:rating).round(2)
    end

  end

  def check
  end

  #method to find top ranked school
  def schools_by_ranking
   # @schools = Review.select('reviews.id').joins('LEFT OUTER JOIN reviews ON (reviews.school_id = t2.school_id AND reviews.rating > t2.rating)').where('t2.school_id IS NULL')
   @schools = School.joins(:reviews).select("schools.*, avg(reviews.rating) as average_rating").group("schools.id").order("average_rating DESC").paginate(page: params[:page], per_page:9)
   #use to_a before .uniq to avoid an error with postgres in production
  end

  def find_by_price
    @schools = School.includes(:reviews).between(params[:price1], params[:price2]).paginate(page: params[:page], per_page:9)

  end

  def calculate_total_fees
    @school = School.find_by(id: params[:id])
     @available_class = params[:second_id]


    @current_fees = 0
    #school_fees
    calculate_all_fees
    respond_to do |format|
        format.html {redirect_to @school}
        format.js
      end
    #first run to see if I can determine someone's school fees estimate for a particular class
  end

  #Can be used later or removed
  # def school_fees
  #   @from_one = School.where(id: params[:id]).pluck(:primary_one, :primary_two, :primary_three, :primary_four, :primary_five, :primary_six, :reg_fees, :exam_fees).map(&:sum).sum
  #   @from_two = School.where(id: params[:id]).pluck(:primary_two, :primary_three, :primary_four, :primary_five, :primary_six,:reg_fees, :exam_fees).map(&:sum).sum
  #   @from_three = School.where(id: params[:id]).pluck(:primary_three, :primary_four, :primary_five, :primary_six, :reg_fees, :exam_fees).map(&:sum).sum
  #   @from_four = School.where(id: params[:id]).pluck(:primary_four, :primary_five, :primary_six, :reg_fees, :exam_fees).map(&:sum).sum
  #   @from_five = School.where(id: params[:id]).pluck(:primary_five, :primary_six,:exam_fees,:reg_fees).map(&:sum).sum
  #   @from_six = School.where(id: params[:id]).pluck(:primary_six, :reg_fees, :exam_fees).map(&:sum).sum

  # end

  def stuff
  end

  private
  def school_params
    params.require(:school).permit(:name, :address, :fees, :reg_fees, :state, :image, :primary_one, :primary_two, :primary_three, :primary_four, :primary_five, :primary_six, :exam_fees)
  end

  def authenticate_user
    if !user_signed_in?
      redirect_to new_user_session_url
    end
  end

  def find_coordinates
    @lat_lng = cookies[:lat_lng].try(:split, "|")
    if @lat_lng.nil?
      @user_coords = request.location.coordinates
      @schools = School.near(@user_coords, 30).paginate(page: params[:page], per_page: 9)
    else
      @schools = School.near(@lat_lng, 30).paginate(page: params[:page], per_page: 9)
    end

  end

end
