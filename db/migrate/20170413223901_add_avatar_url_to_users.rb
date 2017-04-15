class AddAvatarUrlToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :avatar_url, :string, default: "http://res.cloudinary.com/taylorwu21/image/upload/c_scale,w_200/v1492281597/person.png"
  end
end
