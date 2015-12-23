class Role < ActiveRecord::Base
  BANK_ADMIN = 'bank_admin'
  BANKING_PROFESSIONAL = 'banking_professional'
  CONSTRUCTION_INSPECTION_COMPANY_ADMIN = 'cic_admin'
  CONSTRUCTION_INSPECTOR = 'construction_inspector'
  SYSTEM_ADMIN = 'system_admin'

  has_one :user_role
  has_many :user_invitations
  has_many :users, through: :user_role
  
  scope :system_admin, -> {find_by_alias(SYSTEM_ADMIN)}
  scope :bank_admin, -> {find_by_alias(BANK_ADMIN)}
  scope :banking_professional, -> {find_by_alias(BANKING_PROFESSIONAL)}
  scope :cic_admin, -> {find_by_alias(CONSTRUCTION_INSPECTION_COMPANY_ADMIN)}
  scope :construction_inspector, -> {find_by_alias(CONSTRUCTION_INSPECTOR)}
end
