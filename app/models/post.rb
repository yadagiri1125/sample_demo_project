class Post < ActiveRecord::Base
	# this is a post model
	validates :name,
	          # presence: true,
	          exclusion: { in: %w(www us ca jp),message: "smdabhsdjkashdjfa" }
	validates :name, length: { is: 5 }, allow_blank: true

end
