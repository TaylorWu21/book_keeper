class Book < ApplicationRecord
  belongs_to :user

  validates_presence_of :title, :author, :image, :category, :isbn
  validates_uniqueness_of :isbn, scope: :user_id
end
