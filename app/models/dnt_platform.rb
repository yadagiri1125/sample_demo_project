class DntPlatform < ActiveRecord::Base
  #include Segmentable
  belongs_to :segment

  validates :desktop_accepted_flag,
            :mobile_accepted_flag,
            :tablet_accepted_flag,
            :connected_tv_accepted_flag,
            length: { maximum: 1 }
end
