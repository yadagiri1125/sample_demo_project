class CreateDntFormats < ActiveRecord::Migration
  def change
    create_table :dnt_formats do |t|
      t.references :segment, index: true
      t.string :image_accepted_flag, null: false, limit: 1
      t.string :flash_accepted_flag, null: false, limit: 1
      t.string :rich_media_accepted_flag, null: false, limit: 1
      t.string :video_accepted_flag, null: false, limit: 1
      t.string :preroll_accepted_flag, null: false, limit: 1
      t.string :midroll_accepted_flag, null: false, limit: 1
      t.string :postroll_accepted_flag, null: false, limit: 1
      t.string :overlay_accepted_flag, null: false, limit: 1
      t.string :iab_vast_certified_accepted_flag, null: false, limit: 1
      t.string :iab_vpaid_certified_accepted_flag, null: false, limit: 1

      t.timestamps
    end
  end
end
