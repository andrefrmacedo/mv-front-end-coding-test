class InfluencersController < ApplicationController
  def show_sugested
    render json: Influencer.sugested, status: :ok
  end

  def show_starred
    render json: Influencer.starred, status: :ok
  end

  def star
    influencer = Influencer.find_by(id: params[:id])
    if influencer.update(following: true)
      render json: influencer, status: :ok
    else
      render json: influencer.errors.full_messages, status: :unprocessable_entity
    end
  end

  def unstar
    influencer = Influencer.find_by(id: params[:id])
    if influencer.update(following: false)
      render json: influencer, status: :ok
    else
      render json: influencer.errors.full_messages, status: :unprocessable_entity
    end
  end
end
