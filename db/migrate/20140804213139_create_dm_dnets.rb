class CreateDmDnets < ActiveRecord::Migration
  def change
    create_table :dm_dnets do |t|
      t.references :segment, index: true
      t.decimal :min_order_amt, precision: 10, scale: 2
      t.integer :min_order_qty, limit: 8
      t.decimal :total_file_amt, precision: 10, scale: 2
      t.integer :total_file_qty
      t.integer :currency_cdlk_id
      t.boolean :company_size, default: false
      t.boolean :phone, default: false
      t.boolean :enchanced, default: false
      t.boolean :sic_industry, default: false
      t.boolean :name_home_address, default: false
      t.boolean :gender, default: false
      t.boolean :email, default: false
      t.boolean :title_slugging, default: false
      t.boolean :job_title, default: false
      t.boolean :job_function, default: false
      t.boolean :change_address, default: false
      t.integer :change_address_qty, limit: 8
      t.boolean :hotline, default: false
      t.integer :hotline_qty, limit: 8
      t.integer :gender_male_pct, limit: 3
      t.integer :gender_female_pct, limit: 3
      t.integer :age_average, limit: 3
      t.integer :age_from, limit: 3
      t.integer :age_to, limit: 3
      t.decimal :average_unit_of_sale, precision: 5, scale: 2

      t.timestamps
    end
  end
end
