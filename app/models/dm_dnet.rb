class DmDnet < ActiveRecord::Base
  #include Segmentable

  belongs_to :segment
  belongs_to :currency_cdlk
  
  validates :currency_cdlk_id, allow_blank: true, numericality: { only_integer: true}
  validates :min_order_qty,:change_address_qty,:hotline_qty,:total_file_qty,
            length: { maximum: 8},
            numericality: { only_integer: true},
            allow_nil: true
  validates :gender_male_pct,:gender_female_pct,:age_average,:age_from,:age_to,
            length: { maximum: 3},
            numericality: { only_integer: true},
            allow_nil: true
  validates :min_order_amt,:total_file_amt,
            allow_blank: true,
            numericality: true,
            format: {with: /(^\d{0,8}(\.\d{0,2})?$)/ }
  validates :average_unit_of_sale,
            allow_blank: true,
            numericality: true,
            format: {with: /(^\d{0,3}(\.\d{0,2})?$)/ }
  validate :currency_cdlk_exists

  before_save :validate_percentage

  def currency_cdlk_exists
    return true if (currency_cdlk_id.nil? || DmDnet.currency_cdlk_drop_down.empty?)
    _valid_values = DmDnet.currency_cdlk_drop_down.map(&:last)
    errors.add(:base, 'Currency must exist') unless _valid_values.include?(self.currency_cdlk_id)
  end

  # Use to drive form view Ad Unit drop down selection
  def self.currency_cdlk_drop_down
    CurrencyCdlk.all.map{|d| [d.description, d.id] }
  end

  def validate_percentage
    self.errors.add(:base, ' sum of male % and female% must be less than or equal to 100') unless [gender_male_pct.to_i,gender_female_pct.to_i].sum <= 100
  end
end
