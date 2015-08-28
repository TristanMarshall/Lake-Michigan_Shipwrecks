class CreateShips < ActiveRecord::Migration
  def change
    create_table :ships do |t|
      t.string :name
      t.string :latitude
      t.string :longitude
      t.integer :yearlost
      t.string :description

      t.timestamps null: false
    end
  end
end
