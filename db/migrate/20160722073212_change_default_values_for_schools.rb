class ChangeDefaultValuesForSchools < ActiveRecord::Migration
  def change
    change_column_default(:schools, :primary_one, 0)
    change_column_default(:schools, :primary_two,  0)
    change_column_default(:schools, :primary_three,  0)
    change_column_default(:schools, :primary_four,  0)
    change_column_default(:schools, :primary_five,  0)
    change_column_default(:schools, :primary_six,  0)
    change_column_default(:schools, :exam_fees,  0)
    change_column_default(:schools, :reg_fees, 0)
  end
end
