class Schedule < ActiveRecord::Base
  belongs_to :user
  has_many :appointments
end
