Rails.application.routes.draw do
# http://localhost:3000/ship/index
  get '/' => 'ship#index'
# assign the http /resource that you want => (to) the controllerName#fileName

end
