class CreateInfluencers < ActiveRecord::Migration[5.1]
  def change
    create_table :influencers do |t|
      t.string :full_name, null: false
      t.string :instagram_username, null: false
      t.string :instagram_profile_image, null: false
      t.integer :followers, null: false
      t.string :engagement, null: false

      t.timestamps
    end
  end
end
