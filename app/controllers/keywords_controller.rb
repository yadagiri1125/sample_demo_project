class KeywordsController < ApplicationController
  # include SegmentSupport
  before_action  :load_keywords 
  before_action :set_keyword, only: [:edit, :update, :destroy]
  # before_action :require_login, :reload_on_published
   
  def index

  end
  # def edit
  #   load_keywords
  # end

  # # POST /keywords
  def create
    @keyword = Keyword.new(keyword_params)
    flash[:notice] = 'Keyword was successfully reset'
    unless params[:commit] == 'RESET'
      if @keyword.save
        flash[:notice] = 'Keyword was successfully created.'
        @keyword = Keyword.new
      end
    end
    load_keywords
    render 'create_or_update'
  end

  # PATCH/PUT /keywords/1
  def update
    flash[:notice] = 'Keyword was successfully reset'
    unless params[:commit] == 'RESET'
      if @keyword.update(keyword_params)
        flash[:notice] = 'Keyword was successfully updated.'
        @keyword = Keyword.new
      end
    end
    load_keywords
    render 'create_or_update'
  end

  # DELETE /keywords/1
  def destroy
    @keyword.destroy
    flash[:notice] = 'Keyword was successfully deleted.'
    @keyword = Keyword.new
    load_keywords
    render 'create_or_update'
  end

  private
  def load_keywords
    @keywords = Keyword.all
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_keyword
    @keyword = Keyword.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def keyword_params
    params.require(:keyword).permit(:keyword)
  end
end
