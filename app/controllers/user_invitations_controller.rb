class UserInvitationsController < ApplicationController
  authorize_resource :user_invitation
  before_action :authenticate_user!

  def banking_user_invitation
    @ci = params[:ci].present? ? params[:ci] : ''
    @user_invitation = UserInvitation.new
    @ci_companies = CiCompany.all
    @banks = Bank.all
  end

  def send_banking_user_invitation
    params[:user_invitation][:role_id] = check_user_and_find_role    
    params[:user_invitation][:token] = UserInvitation.token
    join_ci_company = CiCompany.find(params[:user_invitation][:ci_company_id]) if params[:user_invitation][:ci_company_id].present?
    join_bank = Bank.find(params[:user_invitation][:bank_id]) if params[:user_invitation][:bank_id].present?
    @user_invitation = UserInvitation.new(user_invitation_params.merge({joinable: join_ci_company || join_bank}))

    if @user_invitation.save
      send_to_banking_professional_and_redirect(params[:user_invitation])
      flash[:success] = 'Invitation sent successfully'
    else
      flash[:error] = 'Invitation not been sent. Please try again'
    end
  end

  private
  
  def user_invitation_params
    params.require(:user_invitation).permit(:email, :role_id, :token, :joinable_by, :joinable_type)
  end

  def send_to_banking_professional_and_redirect(params)
    begin
      InspectDateMailer.send_to_banking_professional(params, current_user).deliver_now!
    rescue Exception => e
      Rails.logger.error "Failed to send email, email address: #{params[:email]}"
      Rails.logger.error "#{e.backtrace.first}: #{e.message} (#{e.class})"
    end
    redirect_to banking_users_path
  end

  def check_user_and_find_role
    user_invitation_params = params[:user_invitation]
    if user_invitation_params[:is_invited_as_banking_admin].present?
      Role.find_by_alias(Role::BANK_ADMIN).id
    elsif !user_invitation_params[:is_invited_as_banking_admin].present? && !params[:ci_user].present?
      Role.find_by_alias(Role::BANKING_PROFESSIONAL).id
    elsif user_invitation_params[:is_invited_as_ci_admin].present? && params[:ci_user] == "true"
      Role.find_by_alias(Role::CONSTRUCTION_INSPECTION_COMPANY_ADMIN).id
    elsif !user_invitation_params[:is_invited_as_ci_admin].present? && params[:ci_user] == "true"
      Role.find_by_alias(Role::CONSTRUCTION_INSPECTOR).id
    else  
    end
  end
end
