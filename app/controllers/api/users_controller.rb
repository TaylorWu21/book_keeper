class Api::UsersController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def index
    if(current_user)
      render json: current_user
    else
      render json: {}
    end
  end

  def update_avatar
    auth = {
      cloud_name: ENV['CLOUDINARY_NAME'],
      api_key:    ENV['CLOUDINARY_API_KEY'],
      api_secret: ENV['CLOUDINARY_API_SECRET']
    }
    file_name = params.keys.first
    file = params[file_name]

    avatar = Cloudinary::Uploader.upload(file.open, auth)
    current_user.update(avatar_url: avatar['secure_url'])
    render json: current_user
  end

  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: { errors: current_user.errors }
    end
  end

  def all_users
    render json: User.where("id != #{current_user.id}").order(:name)
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :phone, :password, :avatar_url)
  end
end
