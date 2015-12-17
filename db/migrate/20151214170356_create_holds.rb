class CreateHolds < ActiveRecord::Migration
  def change
    create_table :holds do |t|
      t.string :name
      t.datetime :date

      t.timestamps
    end
  end
end
