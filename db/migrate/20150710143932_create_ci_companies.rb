class CreateCiCompanies < ActiveRecord::Migration
  def change
    create_table :ci_companies do |t|
      t.string :ci_company_name
      t.string :phone_number
      t.string :ci_company_email
      t.string :url

      t.timestamps null: false
    end
  end
end
