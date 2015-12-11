class DmDnetsController < ApplicationController
  #include SegmentSupport
  #before_action :require_login,:reload_on_published

  def index
  end
  def create
    @dm_dnet = DmDnet.new(dm_dnet_params)
    # @dm_dnet.segment_detail_id = current_sub_seg.id
    flash[:notice] = 'Dnet was successfully reset.'
    unless params[:commit] == 'RESET'
      if  @dm_dnet.save
        # @dm_dnet.assign_user(current_user)
        flash[:notice] =  'Dnet successfully created.'
      end
    end
    render 'load'
  end

  def update
    @dm_dnet = DmDnet.find(params[:id])
    # @dm_dnet.segment_detail_id = current_sub_seg.id
    flash[:notice] = 'Dnet was successfully reset.'
    unless params[:commit] == 'RESET'
      if @dm_dnet.update(dm_dnet_params)
        # @dm_dnet.assign_user(current_user)
        flash[:notice] = 'Dnet was successfully updated.'
      end
    end
    render 'load'
  end

  private

  def dm_dnet_params
    attr = DmDnet.column_names.reject{ |s| s == 'id' || s == 'created_at' || s == 'updated_at' }
    params.require(:dm_dnet).permit(attr)
  end
end
