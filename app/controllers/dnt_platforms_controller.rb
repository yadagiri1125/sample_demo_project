class DntPlatformsController < ApplicationController
  # include SegmentSupport
  # before_action :require_login,:reload_on_published

  def create
    @dnt_platform = DntPlatform.new(dnt_platform_params)
    # @dnt_platform.segment_detail_id = current_sub_seg.id
    flash[:notice] = 'Platform was successfully reset.'
    unless params[:commit] == 'RESET'
      if @dnt_platform.save
        # @dnt_platform.assign_user(current_user)
        flash[:notice] = 'Platform was successfully created.'
      end
    end
    render 'load'
  end

  def update
    @dnt_platform = DntPlatform.find(params[:id])
    # @dnt_platform.segment_detail_id = current_sub_seg.id
    flash[:notice] = 'Platform was successfully reset.'
    unless params[:commit] == 'RESET'
      if @dnt_platform.update(dnt_platform_params)
        # @dnt_platform.assign_user(current_user)
        flash[:notice] =  'Platform was successfully updated.'
      end
    end
    render 'load'
  end

  private

  def dnt_platform_params
    params.require(:dnt_platform).permit(:desktop_accepted_flag,:mobile_accepted_flag,
                                         :tablet_accepted_flag,:connected_tv_accepted_flag)
  end
end
