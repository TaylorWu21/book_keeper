class Follower < ApplicationRecord
  belongs_to :user

  validates_presence_of :following_id
  validates_uniqueness_of :following_id, scope: :user_id
end
