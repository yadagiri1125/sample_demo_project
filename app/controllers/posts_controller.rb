class PostsController < ApplicationController
 
 before_action :set_post, only: [:show,:edit,:update,:destroy]
 def index
   # @posts = Post.all
   @users = User.all
 end

  def show
  end

   def new
     @post = Post.new
   end

  def edit
  end
  def create
     @post = Post.new(post_params)
     @post.save
     redirect_to posts_path
  end

   def update
     @post.update(post_params)
      redirect_to post_path
   end

   def destroy
    @post.destroy
    redirect_to posts_path
   end

private
 def post_params
   params.require(:post).permit( :name,:user_id,:description,:category_id)
 end
 def set_post
   @post = Post.find(params[:id])
 end
end
