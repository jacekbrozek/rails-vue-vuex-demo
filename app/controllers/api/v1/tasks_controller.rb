module Api
  module V1
    class TasksController < BaseController
      def index
        render(
          json: TaskSerializer.new(Task.all).serialized_json,
          status: :ok
        )
      end
    end
  end
end
