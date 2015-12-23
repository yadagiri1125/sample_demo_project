class CreateUserProfiles < ActiveRecord::Migration
  def change
    create_table :user_profiles do |t|
      t.string :name
      t.integer :user_id
      t.string :contact
      t.string :designation
      t.string :department

      t.timestamps null: false
    end
  end
end
