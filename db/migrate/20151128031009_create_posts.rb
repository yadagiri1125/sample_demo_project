class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :name
      t.integer :user_id
      t.string :description
      t.integer :category_id
      t.boolean :is_published

      t.timestamps
    end
  end
end
