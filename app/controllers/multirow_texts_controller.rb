class MultirowTextsController < ApplicationController

  def index
    @cities = City.all
    @sponsors = Sponsor.all
    @calculations = Calculation.all
  end
end