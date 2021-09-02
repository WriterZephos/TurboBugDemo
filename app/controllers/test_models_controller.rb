class TestModelsController < ApplicationController
  def index
  end

  def new
    respond_to do |format|
      format.html do
        render partial: "form"
      end
    end
  end
end
