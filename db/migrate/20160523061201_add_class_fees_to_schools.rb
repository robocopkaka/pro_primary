class AddClassFeesToSchools < ActiveRecord::Migration
  def change
    add_column :schools, :primary_one, :integer
    add_column :schools, :primary_two, :integer
    add_column :schools, :primary_three, :integer
    add_column :schools, :primary_four, :integer
    add_column :schools, :primary_five, :integer
    add_column :schools, :primary_six, :integer
    add_column :schools, :exam_fees, :integer
  end

  def up
    change_column_default :schools, :primary_one, 0
    change_column_default :schools, :primary_two,  0
    change_column_default :schools, :primary_three,  0
    change_column_default :schools, :primary_four,  0
    change_column_default :schools, :primary_five,  0
    change_column_default :schools, :primary_six,  0
    change_column_default :schools, :exam_fees,  0
  end
end
