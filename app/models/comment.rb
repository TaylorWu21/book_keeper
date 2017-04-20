class Comment < ApplicationRecord
  belongs_to :book
  validates_presence_of :message, :user_id
end
