Rails.application.routes.draw do
  
  get 'sugested', to: 'influencers#show_sugested'
  get 'starred', to: 'influencers#show_starred'
  put 'star/:id', to: 'influencers#star'
  put 'unstar/:id', to: 'influencers#unstar'

end
