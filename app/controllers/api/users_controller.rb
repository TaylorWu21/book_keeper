class Api::UsersController < ApplicationController
  def index
    if(current_user)
      render json: current_user
    else
      render json: {}
    end
  end

  def update
    auth = {
      cloud_name: ENV['CLOUDINARY_NAME'],
      api_key:    ENV['CLOUDINARY_API_KEY'],
      api_secret: ENV['CLOUDINARY_API_SECRET']
    }
    if current_user.update(user_params)
      render json: current_user
    else
      render json: { errors: current_user.errors }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :phone, :password, :avatar_url)
  end
end
