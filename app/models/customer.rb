class Customer < ActiveRecord::Base
	validates :name, presence: true
	validates :name, exclusion: { in: %w(www us ca jp), message: "%{value} is reserved." }
end