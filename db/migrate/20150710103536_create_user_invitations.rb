class CreateUserInvitations < ActiveRecord::Migration
  def change
    create_table :user_invitations do |t|
      t.string :email
      t.string :token
      t.integer :role_id
      t.integer :joinable_id
      t.string :joinable_type

      t.timestamps null: false
    end
  end
end
