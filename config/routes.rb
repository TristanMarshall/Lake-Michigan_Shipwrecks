Rails.application.routes.draw do
  namespace :api do
    resources :ships
      resources :ships, only: [:create]
  end
# http://localhost:3000/ship/index
  get '/' => 'ship#index'
# assign the http /resource that you want => (to) the controllerName#fileName
end
