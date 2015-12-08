namespace :user do
    desc "seeds user data"
    
    task :seed => :environment do
         for i in 0..100
             @user = User.create(name:"name#{i}")
             puts @user.name
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
    #dskfhnasjk

     desc "unseeds user data"
    
    task :update_posts => :environment do
      @posts = Post.take(100)
      @posts.each_with_index do |post,i|
        puts "updaing #{post.id} record"
        post.user_id = 100 + i
        post.description = "lsdjkadjask" 
        post.save   
      end
    end
  end