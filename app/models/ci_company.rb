class CiCompany < ActiveRecord::Base
  has_many :employees, as: :employable
  has_many :users, through: :employees
  has_many :projects
  has_many :banks, through: :projects
  has_many :project_inspection_requests, through: :projects
  has_one :address, as: :addressable
  accepts_nested_attributes_for :address
  validates :ci_company_name , presence: true
  validates_format_of :ci_company_email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
end