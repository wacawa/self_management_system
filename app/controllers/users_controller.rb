class UsersController < ApplicationController
  before_action :set_user, only: %i(new)

  def create
  end


  # before_action

    def set_user
      @user = User.find(params[:id])
    end
end
