# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
for i in 0..100
User.create(name:"user#{i}")
Post.create(name:"user#{i}")
Category.create(name:"user#{i}")
Product.create(name:"user#{i}")
end
