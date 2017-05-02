Rails.application.routes.draw do

  root 'home#index'

  namespace :api do
    # User Routes
    get 'user', to: 'users#index'
    put 'user', to: 'users#update'
    post 'user_avatar', to: 'users#update_avatar'

    get 'all_users', to: 'users#all_users'

    # Book Routes
    get 'books', to: 'books#index'
    get 'books/:id', to: 'books#user_library'
    post 'book', to: 'books#create'
    delete 'book/:id', to: 'books#destroy'

    # Comment Routes
    get 'books/:book_id/comments', to: 'comments#index'
    post 'books/:book_id/comments', to: 'comments#create'
    put 'comments/:comment_id', to: 'comments#update'
    delete 'comments/:comment_id', to: 'comments#destroy'

    # Follower Routes
    get '/followings', to: 'followers#index'
    post '/following', to: 'followers#create'
    delete 'following/:follow_id', to: 'followers#destroy'
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get '*unmatched_route', to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
