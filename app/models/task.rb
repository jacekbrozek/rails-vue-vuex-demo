class Task < ApplicationRecord
  validates :name, presence: true

  enum status: [ :pending, :in_progress, :done ]
end
