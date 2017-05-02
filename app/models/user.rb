class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :books, dependent: :destroy
  has_many :followers

  validates_presence_of :email, :name
  validates_uniqueness_of :email
  
end
