class BanksController < ApplicationController
  #authorize_resource :bank
  before_filter :find_by_bank_id, only: [:edit, :update, :show]
  before_filter :is_bank_admin_or_is_banking_professional, only: [:index]
  def index
    @banks = Bank.page(params[:page]).per(t('pagination.per_page'))
  end

  def new
    @bank = Bank.new.tap do |bank|
      bank.address = Address.new
    end
  end

  def create
    @bank = Bank.create(bank_params)
    if @bank.save
      if current_user.is_bank_admin? || current_user.is_cic_admin? && !current_user.user_invitations.present?
        employee = Employee.new({user_id: current_user.id, employable: @bank})
        employee.save
      end
      flash[:notice] = "Bank Registered Successfully"
      if current_user.is_bank_admin? 
        redirect_to bank_path(@bank)
      else
        redirect_to banks_path
      end
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @bank.update_attributes(bank_params)
      flash[:notice] = "Bank data Successfully updated"
      if current_user.is_bank_admin?
        redirect_to bank_path(@bank)
      else
        redirect_to banks_path
      end
    else
      render :edit
    end
  end

  def show
  end

  def destroy
    bank = Bank.find(params[:id])
    bank.delete
    flash[:notice] = "Bank Deleted Successfully"
    redirect_to banks_path
  end

  private

  def bank_params
    params.require(:bank).permit(:id, :bank_name, :phone_number, :email, :url, :address_attributes => [:state_id, :country_id, :street, :city])
  end

  def user_employee_params
    params.require(:employee).permit(:user_id, :employable_id, :employable_type)
  end

  def find_by_bank_id
    @bank = Bank.find(params[:id])
  end

  def is_bank_admin_or_is_banking_professional
    # if current_user.is_bank_admin? && !current_user.employee.employable.present?
    #   redirect_to new_bank_path 
    # elsif current_user.is_bank_admin? && current_user.employee.present?
    #   redirect_to bank_path(current_user.employee.employable.id)
    # else
    #   banks_path
    # end
    banks_path
  end
end
