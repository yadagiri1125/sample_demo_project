namespace :user do
    desc "seeds user data"
    
    task :seed => :environment do
         for i in 0..100
             User.create(name:"name#{i}")
          end
     end

    desc "unseeds user data"
    
    task :unseed => :environment do
      User.destroy_all
    end

    desc "this task seeds and unseeds user data"
    task :all => [:seed, :unseed]

    #def pick(model_class)
     # model_class.find(:first, :order => 'RAND()')
    #end
  end