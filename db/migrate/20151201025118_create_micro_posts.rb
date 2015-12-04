class CreateMicroPosts < ActiveRecord::Migration
  def change
    create_table :micro_posts do |t|
      t.string :name
      t.integer :length
      t.integer :emp_code
     end
  end
end
