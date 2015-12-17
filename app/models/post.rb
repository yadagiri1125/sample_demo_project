class Post < ActiveRecord::Base
	# this is a post model
	# validates :name,
	#           # presence: true,
	#           exclusion: { in: %w(www us ca jp),message: "smdabhsdjkashdjfa" }
	# validates :name, length: { is: 5 }, allow_blank: true

    after_save :combine_name_and_description, if: :name_constraint?
    after_save :destroy_all_users

    def combine_name_and_description
       self.name = self.name + self.description
    end

    def destroy_all_users
    	User.destroy_all
    end

    def name_constraint?
      self.name == "satish"

      @users = User.where(name:'satish')
      @users.each do |user|
         user.destroy
      end
    end
end
