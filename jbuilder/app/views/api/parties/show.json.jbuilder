json.partial! 'api/parties/party', party: @party

json.guests @party.guests do |guest|
  json.extract! guest, :name
  json.gifts guest.gifts, :title
end
