class CreateShips < ActiveRecord::Migration
  def change
    create_table :ships do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.integer :yearlost
      t.string :description

      t.timestamps null: false
    end
  end
end
