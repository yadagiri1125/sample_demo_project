class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.integer :user_id
      t.integer :employable_id
      t.string :employable_type

      t.timestamps null: false
    end
  end
end
