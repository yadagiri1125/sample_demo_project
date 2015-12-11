class DntFormat < ActiveRecord::Base
  #include Segmentable
  belongs_to :segment

  validates :image_accepted_flag,:flash_accepted_flag,:rich_media_accepted_flag,:video_accepted_flag,:preroll_accepted_flag,
            :midroll_accepted_flag,:postroll_accepted_flag,:overlay_accepted_flag,:iab_vast_certified_accepted_flag,
            :iab_vpaid_certified_accepted_flag,
            length: { maximum: 1 }
end