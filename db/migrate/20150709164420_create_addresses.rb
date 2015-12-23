class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.integer :addressable_id
      t.string :addressable_type
      t.string :street
      t.string :city
      t.integer :state_id
      t.integer :country_id

      t.timestamps null: false
    end
  end
end
