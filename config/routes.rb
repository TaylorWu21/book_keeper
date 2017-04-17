Rails.application.routes.draw do

  root 'home#index'

  namespace :api do
    get 'user', to: 'users#index'
    put 'user', to: 'users#update'
    post 'user_avatar', to: 'users#update_avatar'

    get 'all_users', to: 'users#all_users'

    get 'books', to: 'books#index'
    get 'books/:id', to: 'books#user_library'
    post 'book', to: 'books#create'
    delete 'book/:id', to: 'books#destroy'
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get '*unmatched_route', to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
