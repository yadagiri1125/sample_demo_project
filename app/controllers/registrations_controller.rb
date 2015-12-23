class RegistrationsController < ApplicationController
  before_filter :verify_token_for_registration, only: [:user_registration]
  layout 'auth'

  def verify_token_for_registration
    invitation = UserInvitation.find_by_token(params[:token])
    if invitation.present?
      params[:email] = invitation.email
    else
      redirect_to root_path and return false
    end
  end

  def user_registration
    @user = User.new
  end

  def create
    @user = User.new(configure_user_permitted_parameters)
    if @user.save
      user_role = UserRole.new(user_id: @user.id, role_id: UserInvitation.find_by_email(@user.email).role_id)
      user_role.save
      user_profile = UserProfile.new(configure_user_profile_permitted_parameters.merge({user_id: @user.id}))
      user_profile.save
      employee = Employee.new({user_id: @user.id, employable: UserInvitation.find_by_token(params[:token]).joinable})
      employee.save
    end
    session.clear
    redirect_to root_path
  end

  private

  def configure_user_permitted_parameters
    params.require(:user).permit(:email, :password)
  end

  def configure_user_profile_permitted_parameters
    params.require(:user_profile).permit(:name, :contact, :designation, :department)
  end

end 