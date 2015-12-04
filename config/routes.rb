SampleApp1::Application.routes.draw do
  resources :locations

  resources :users

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
  resources :micro_posts,:posts
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root "locations#index"


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
  #   end
  
  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # fgjhfgjgh
end
