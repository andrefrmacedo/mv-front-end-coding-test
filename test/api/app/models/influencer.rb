class Influencer < ApplicationRecord
  validates :full_name,
            :instagram_username,
            :instagram_profile_image,
            :followers,
            :engagement,
            presence: true

  scope :sugested, -> { where(following: false) }
  scope :starred, -> { where(following: true) }
end
