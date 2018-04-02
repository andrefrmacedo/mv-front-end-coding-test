class InfluencerSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :instagram_username, :instagram_profile_image, :statistics

  def statistics
    object.slice(:followers, :engagement)
  end
end
