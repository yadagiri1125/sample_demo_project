SampleApp1::Application.routes.draw do
  resources :holds

  get "countries/index"
  get "countries/show"
  get "countries/edit"
  get "countries/sample"
  get "countries/calculation"
  resources :fasts

  get "home/sample1"
  get "home/sample"
  resources :locations

  resources :users do 
    member do
     get 'preview'
    end

    collection do
      get 'search'
    end
  end
  resources :posts
  resources :multirow_texts,:cities,:calculations,:sponsors

  get "categories/new"
  get "categories/edit"
  get "categories/show"
  get "categories/index"
  get "products/new"
  get "products/edit"
  get "products/show"
  get "products/index"
  get "user/show"
  get "user/index"
  resources :orders
  resources :micro_posts,:posts

  get '/patients/:id', to: 'patients#show'
  get '/satish', to: 'patients#index'
  get 'profile', to: 'users#index'

  namespace :admin do
   resources :articles, :comments
  end

  resources :customers do
    resources :orders
  end

  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root "locations#index"
  resources :keywords
  resources :dm_dnets,:dnt_formats,:dnt_platforms

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  # #   end
  # dfsd;lsfjkg
  # sdflg/ksmdfl;grep(dflg.msdflg/msdflg

  #   dfgl.smdfklg) { |match|  }
  # Example resource route with concerns:
  #   conc

  # fgjhfgjgh
end
