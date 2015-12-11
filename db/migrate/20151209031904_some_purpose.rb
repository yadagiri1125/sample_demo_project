class SomePurpose < ActiveRecord::Migration
  def change
  	create_table :products_new do |t|
      t.string :name
      t.integer :user_id
      t.string :description
      t.integer :category_id
      t.boolean :is_published

      t.timestamps
    end

    create_table :customers_new do |t|
      t.string :name
      t.integer :user_id
      t.string :description
      t.integer :category_id
      t.boolean :is_published

      t.timestamps
    end

    create_table :orders_new do |t|
      t.string :name
      t.integer :user_id
      t.string :description
      t.integer :category_id
      t.boolean :is_published

      t.timestamps
    end
   end
end
