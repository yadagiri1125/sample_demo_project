class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
    	    t.string :name
    	    t.integer :address_id
    	    t.integer :order_id
    	    t.timestamps null: false
    # for i in  0..10
    # client.create(name: "name #{i}", address_id:i, order_id:i)

    #     enD
    end
  end


  # def up
  #   create table
  # end

  # def down
  #  dop table
  # end
end

