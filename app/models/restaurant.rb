class Restaurant < ApplicationRecord
  mount_uploader :image, ImageUploader
  validates :image, presence: true
  has_many :reviews
end
