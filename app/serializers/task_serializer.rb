class TaskSerializer
  include FastJsonapi::ObjectSerializer
  set_type :tasks

  attributes :name,
             :status
end
