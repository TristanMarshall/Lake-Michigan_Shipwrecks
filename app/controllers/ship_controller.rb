class ShipController < ApplicationController
  def index
    @ships = Ship.all
  end
end
