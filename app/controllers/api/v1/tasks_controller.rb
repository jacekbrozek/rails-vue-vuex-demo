module Api
  module V1
    class TasksController < BaseController
      def index
        render json: Task.all
      end
    end
  end
end
