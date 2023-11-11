class ContactMessage < ApplicationRecord
  include ActiveModel::Model
  attr_accessor :full_name, :email, :subject, :message

  validates :full_name, presence: true
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :subject, presence: true
  validates :message, presence: true
end
