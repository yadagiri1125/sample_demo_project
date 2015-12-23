class StaticsController < ApplicationController
  before_action :authenticate_user!
  layout 'auth'
  def index
  end
end
