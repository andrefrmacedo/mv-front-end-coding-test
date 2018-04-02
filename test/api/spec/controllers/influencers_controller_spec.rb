require 'rails_helper'

RSpec.describe InfluencersController, type: :controller do

  describe "GET #show_sugested" do
    it "returns http success" do
      get :show_sugested
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show_starred" do
    it "returns http success" do
      get :show_starred
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #star" do
    it "returns http success" do
      get :star
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #unstar" do
    it "returns http success" do
      get :unstar
      expect(response).to have_http_status(:success)
    end
  end

end
