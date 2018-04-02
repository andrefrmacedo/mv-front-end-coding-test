# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

json = ActiveSupport::JSON.decode(File.read('db/data.json'))

json['data'].each do |i|
  Influencer.create!(
    full_name: i['full_name'],
    instagram_username: i['instagram_username'],
    instagram_profile_image: i['instagram_profile_image'],
    followers: i['statistics']['followers'],
    engagement: i['statistics']['engagement']
  )
end
