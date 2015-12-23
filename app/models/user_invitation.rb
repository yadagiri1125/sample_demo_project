class UserInvitation < ActiveRecord::Base
  belongs_to :user
  belongs_to :role
  belongs_to :joinable, polymorphic: true

  private

  def self.token
    SecureRandom.hex
  end
end
