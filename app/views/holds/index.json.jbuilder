json.array!(@holds) do |hold|
  json.extract! hold, :id, :name, :date
  json.url hold_url(hold, format: :json)
end
