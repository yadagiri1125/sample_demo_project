class BankingUsersController < ApplicationController
  def index
    if current_user.is_bank_admin?
      @banking_professionals = Employee.where(employable_id: current_user.employee.employable.id).where.not(user_id: current_user.id)
    else
      @banking_professionals = Employee.all.where.not(user_id: current_user.id)
    end
  end
end
