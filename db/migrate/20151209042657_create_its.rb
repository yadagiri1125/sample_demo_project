class CreateIts < ActiveRecord::Migration
  def change
    create_table :its do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
