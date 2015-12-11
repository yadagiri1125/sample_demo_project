class CreateDntPlatforms < ActiveRecord::Migration
  def change
    create_table :dnt_platforms do |t|
      t.references :segment, index: true
      t.string :desktop_accepted_flag, null: false, limit: 1
      t.string :mobile_accepted_flag, null: false, limit: 1
      t.string :tablet_accepted_flag, null: false, limit: 1
      t.string :connected_tv_accepted_flag, null: false, limit: 1

      t.timestamps
    end
  end
end
