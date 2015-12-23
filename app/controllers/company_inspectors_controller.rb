class CompanyInspectorsController < ApplicationController
  def index
    @company_inspectors = Role.find_by_alias(Role::CONSTRUCTION_INSPECTOR).users.where.not(id: current_user.id)
  end
end