class Book < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates_presence_of :title, :author, :image, :category, :isbn
  validates_uniqueness_of :isbn, scope: :user_id
end
