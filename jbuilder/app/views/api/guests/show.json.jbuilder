json.partial! 'api/guests/guest', guest: @guest

json.gifts @guest.gifts do |gift|
  # json.extract! gift, :title, :description
  json.title = gift.title
  json.description = gift.description
end
