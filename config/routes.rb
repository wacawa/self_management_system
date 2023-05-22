Rails.application.routes.draw do
  root 'static_pages#home'

  post 'login', to: 'static_pages#login'
  delete 'logout', to: 'static_pages#logout'

  get 'schedule', to: 'static_pages#schedule'
  get 'skill', to: 'static_pages#skill'
  get 'money', to: 'static_pages#money'

  resources :users, except: :new
end
