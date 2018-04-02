class AddFollowingToInfluencers < ActiveRecord::Migration[5.1]
  def change
    add_column :influencers, :following, :boolean, default: false
  end
end
