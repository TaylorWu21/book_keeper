Rails.application.routes.draw do
  root 'home#index'

  #might be
  # devise_for :users, controllers: {
  #       sessions: 'sessions',
  #       registrations: 'registrations'
  # }

  devise_for :users, controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
  }
  get '*unmatched_route', to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
