class Employee < ActiveRecord::Base
  belongs_to :user
  belongs_to :employable, polymorphic: true
end
