class HighScore < ApplicationRecord
  validates :game, :score, presence: true
end
