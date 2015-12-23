class Address < ActiveRecord::Base
  belongs_to :addressable, polymorphic: true
  belongs_to :state, class_name: 'State', foreign_key: :state_id
  belongs_to :country, class_name: 'Country', foreign_key: :country_id
end
