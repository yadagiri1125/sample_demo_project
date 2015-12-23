class CreateCicUserProfiles < ActiveRecord::Migration
  def change
    create_table :cic_user_profiles do |t|

      t.timestamps null: false
    end
  end
end
