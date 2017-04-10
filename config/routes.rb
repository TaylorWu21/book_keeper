Rails.application.routes.draw do

  root 'home#index'

  namespace :api do
    get 'user', to: 'users#index'
    get 'book', to: 'books#index'
    post 'book', to: 'books#create'
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get '*unmatched_route', to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
