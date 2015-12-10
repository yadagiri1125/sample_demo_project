class HomeController < ApplicationController
  before_action :seed_data

  def sample1
  	my_path
    #destroy_records
  end


  def sample
   # destroy_records
  	redirect_to locations_path
  end


  private

  def my_path
    render 'shared/index'
  end
  
  def destroy_records
    User.destroy_all
    Product.destroy_all
  end

  def seed_data
     for i in 0..100
         puts "creating #{i} record"
         #User.create(name:"user#{i}")
         Post.create(name:"user#{i}")
         Category.create(name:"user#{i}")
         Product.create(name:"user#{i}")
      end
   end
end
