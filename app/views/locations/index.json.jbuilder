json.array!(@locations) do |location|
  json.extract! location, :id, :name, :country, :party_id
  json.url location_url(location, format: :json)
end
