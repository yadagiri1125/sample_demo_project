class User < ActiveRecord::Base
  has_one :user_role
  has_many :role, through: :user_role
  has_one :user_profile
  has_many :user_invitations, as: :joinable
  has_one :employee

  has_many :cic_assigned_projects, class_name: "Project", foreign_key: "raised_by_id"
  has_many :raised_bank_projects, class_name: "Project", foreign_key: "assigned_to_id"

  has_many :assigned_inspection_requests, class_name: "ProjectInspectionRequest", foreign_key: "raised_by_id"
  has_many :raised_inspection_requests, class_name: "ProjectInspectionRequest", foreign_key: "assigned_to_id"

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  def is_system_admin?
    have_role?(Role::SYSTEM_ADMIN)
  end

  def is_bank_admin?
    have_role?(Role::BANK_ADMIN)
  end

  def is_banking_professional?
    have_role?(Role::BANKING_PROFESSIONAL)
  end

  def is_cic_admin?
    have_role?(Role::CONSTRUCTION_INSPECTION_COMPANY_ADMIN)
  end

  def construction_inspector?
    have_role?(Role::CONSTRUCTION_INSPECTOR)
  end

  def have_role?(role_type)
    role.pluck(:alias).include? role_type if role
  end
end
