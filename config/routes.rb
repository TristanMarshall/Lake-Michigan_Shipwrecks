Rails.application.routes.draw do
  namespace :api do
    resources :ships
      resources :ships, only: [:create]
  end
  root 'ship#welcome'
# http://localhost:3000/ship/index
  get '/home' => 'ship#index'
# assign the http /resource that you want => (to) the controllerName#fileName
  get '/welcome' => 'ship#welcome'

end
