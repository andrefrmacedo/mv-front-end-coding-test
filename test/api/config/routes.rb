Rails.application.routes.draw do
  
  get 'sugested', to: 'influencers#show_sugested'
  get 'starred', to: 'influencers#show_starred'
  patch 'star/:id', to: 'influencers#star'
  patch 'unstar/:id', to: 'influencers#unstar'

end
