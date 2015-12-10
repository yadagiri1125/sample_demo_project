class CreateFasts < ActiveRecord::Migration
  def change
    create_table :fasts do |t|
      t.string :name

      t.timestamps
    end
  end
end
