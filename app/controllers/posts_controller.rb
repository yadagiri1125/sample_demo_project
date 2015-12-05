class PostsController < ApplicationController
 
 def index
   @posts = Post.all
   @users = User.all
 end

  def show
    @post = Post.find(params[:id])
  end

   def new
     @post = Post.new
   end

  def create
     @post = Post.new(post_params)
     @post.save
     redirect_to posts_path
  end

  private
 def post_params
   params.require(:post).permit( :name,:user_id,:description,:category_id)
 end
end
