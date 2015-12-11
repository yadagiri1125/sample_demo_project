class DntFormatsController < ApplicationController
  #include SegmentSupport
 # before_action :require_login,:reload_on_published
  def index
  end
  def create
    @dnt_format = DntFormat.new(dnt_format_params)
    #@dnt_format.segment_detail_id = current_sub_seg.id
    flash[:notice] = 'Format was successfully reset.'
    unless params[:commit] == 'RESET'
      if @dnt_format.save
      #  @dnt_format.assign_user(current_user)
        flash[:notice] = 'Format was successfully created.'
      end
    end
    render 'load'
  end

  def update
    @dnt_format = DntFormat.find(params[:id])
    #@dnt_format.segment_detail_id = current_sub_seg.id
    flash[:notice] = 'Format was successfully reset.'
    unless params[:commit] == 'RESET'
      if @dnt_format.update(dnt_format_params)
        #@dnt_format.assign_user(current_user)
        flash[:notice] =  'Format was successfully updated.'
      end
    end
    render 'load'
  end

  private

  def dnt_format_params
    format_params = DntFormat.column_names.reject{|s| s == 'id' || s == 'created_at' || s == 'updated_at'}
    params.require(:dnt_format).permit(format_params)
  end
end