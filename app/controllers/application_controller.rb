class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  layout :layout_for_signin

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_url, :alert => exception.message
  end
    
  private
  
  def layout_for_signin
    if devise_controller?
      'auth'
    end
  end

  protected

  def after_sign_in_path_for(resource)
    if resource.is_system_admin? || resource.is_bank_admin?
      banks_path
    elsif resource.is_banking_professional?
      banking_users_path
    elsif resource.is_cic_admin?
      ci_companies_path
    elsif resource.construction_inspector?
      company_inspectors_path 
    end
  end

  def after_sign_out_path_for(resource)
    root_path
  end
end
