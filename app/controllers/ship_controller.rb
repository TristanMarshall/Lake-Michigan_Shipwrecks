class ShipController < ApplicationController


  def index
    @key = ENV['API_KEY']
  end


  def welcome

  end

  def data
    @key = ENV['API_KEY']
  end
end
