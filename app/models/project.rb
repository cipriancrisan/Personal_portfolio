class Project < ApplicationRecord
  validates_presence_of :name, :description, :image_url, :link_url
end
