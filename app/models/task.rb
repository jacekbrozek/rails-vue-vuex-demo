class Task < ApplicationRecord
  validate :name, presence: true

  enum status: [ :pending, :in_progress, :done ]
end
