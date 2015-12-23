class CiCompaniesController < ApplicationController
  authorize_resource :ci_company
  before_filter :find_by_id, only: [:edit, :update, :destroy]
  def index
    @ci_companies = CiCompany.page(params[:page]).per(t('pagination.per_page'))
  end

  def new
    @ci_company = CiCompany.new.tap do |ci_company|
      ci_company.address = Address.new
    end
  end

  def create
    @ci_company = CiCompany.create(ci_company_params)
    if @ci_company.save
      flash[:notice] = "Ci Company  Registered Successfully"
      redirect_to ci_companies_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @ci_company.update_attributes(ci_company_params)
      flash[:notice] = "Ci Company Successfully updated"
      redirect_to ci_companies_path
    else
      render :edit
    end
  end

  def destroy
    ci_company.delete
    flash[:notice] = "Ci Company Deleted Successfully"
    redirect_to ci_companies_path
  end

  private

  def find_by_id
    CiCompany.find(params[:id])
  end

  def ci_company_params
    params.require(:ci_company).permit(:id, :ci_company_name, :phone_number, :ci_company_email, :url, :address_attributes => [:state_id, :country_id, :street, :city])
  end
end