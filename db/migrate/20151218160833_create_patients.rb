class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.string :name
      t.text :address
      t.integer :cycles
      t.integer :years

      t.timestamps
    end
  end
end
