Rails.application.routes.draw do
  get '/login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  root 'home#index'

  post 'message', to: 'messages#create'

  mount ActionCable.server, at:'/cable'
end
