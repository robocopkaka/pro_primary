class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  include SchoolsHelper

  def after_sign_in_path_for(resource)
    school_path(id: session[:school_id])
  end
end
