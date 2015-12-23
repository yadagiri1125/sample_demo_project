class Bank < ActiveRecord::Base
  has_many :projects
  has_many :cics, through: :projects
  has_many :employees, as: :employable
  has_many :users, through: :employees
  has_one :address, as: :addressable
  accepts_nested_attributes_for :address
  validates :bank_name , presence: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end
