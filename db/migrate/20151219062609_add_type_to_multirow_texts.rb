class AddTypeToMultirowTexts < ActiveRecord::Migration
  def change
  	add_column :multirow_texts,:type,:string
  end
end
