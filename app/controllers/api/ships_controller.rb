class Api::ShipsController < ApplicationController
before_action :restrict_access
respond_to :json

#renders all data to index
  def index
    render json: Ship.all
  end

#render data
  def show
    ship = Ship.find(params[:id])
    render json: ship
  end

#create new object within model
  def create
    @ship = Ship.create({
      :name => params[:name],
      :latitude => params[:latitude],
      :longitude => params[:longitude],
      :yearlost => params[:yearlost],
      :description => params[:description]
      })
      render json: @ship
    if @ship.save
      head 200 # if this is returned, all okay
    else
      head 500 # if this is returned, something is wrong
    end
  end

#update object within model
  def update
    @ship = Ship.find(params[:id])
    @ship.update({
    :name => params[:name],
    :latitude => params[:latitude],
    :longitude => params[:longitude],
    :yearlost => params[:yearlost],
    :description => params[:description]
  })
    @ship.save
  render json: @ship
    end

#destroy object within model
  def destroy
    @ship = Ship.find(params[:id])
    @ship.destroy
    render json: @ship
  end

#Authenticate
  private
  def restrict_access
    authenticate_or_request_with_http_token do |token, options|
      ApiKey.exists?(access_token: token)

    end
  end
end
