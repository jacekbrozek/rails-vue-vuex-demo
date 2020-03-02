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

      def update
        task = Task.find(task_params[:id])
        task.update(task_params)
        render(
          json: TaskSerializer.new(task).serialized_json
        )
      end

      private

      def filtering_options
        return {} if params[:filter].blank?
        {
          status: params[:filter][:status]
        }
      end

      def task_params
        params.require(:data).permit(:id, {
          attributes: [:status]
        })
      end
    end
  end
end
