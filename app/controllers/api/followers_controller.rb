class Api::FollowersController < ApplicationController

  def index
    followings = []
    current_user.followers.each do |following|
      follow = {
        id: following.id,
        following_name: User.find(following.following_id).name,
        following_avatar_url: User.find(following.following_id).avatar_url,
        following_id: following.following_id,
      }
      followings.push(follow)
    end
    render json: followings
  end

  def create
    following = current_user.followers.new(follower_params)
    if following.save
      render json: following
    else
      render json: { error: following.errors.full_messages.join(' ') }, status: 422
    end
  end

  def destroy
    Follower.where(user_id: current_user.id, following_id: params[:follow_id]).first.destroy
  end

  def get_followers
    followers = []
    Follower.where(following_id: current_user.id).each do |follower|
      follow = {
        id: follower.id,
        following_name: User.find(follower.user_id).name,
        following_avatar_url: User.find(follower.user_id).avatar_url,
        following_id: follower.user_id,
      }
      followers.push(follow)
    end
    render json: followers
  end

  private
  
  def follower_params
    params.require(:follower).permit(:following_id)
  end
end
