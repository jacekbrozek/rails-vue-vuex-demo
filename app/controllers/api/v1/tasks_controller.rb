module Api
  module V1
    class TasksController < BaseController
      def index
        tasks = Task.where(filtering_options)

        render(
          json: TaskSerializer.new(tasks).serialized_json,
          status: :ok
        )
      end

      private

      def filtering_options
        return {} if params[:filter].blank?
        {
          status: params[:filter][:status]
        }
      end
    end
  end
end
