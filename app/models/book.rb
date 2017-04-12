class Book < ApplicationRecord
  belongs_to :user

  validates_presence_of :title, :author, :description, :image, :category, :isbn
  validates_uniquness_of :isbn, scope: :user_id
end
