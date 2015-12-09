class CreateCountires < ActiveRecord::Migration
  def change
    create_table :countires do |t|
      t.string :name
      t.integer :code
      t.timestamps
    end
  end
end
