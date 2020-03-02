import { BaseModel } from './model.base'
import { attr } from 'spraypaint'

export const Task = BaseModel.extend({
  static: {
    jsonapiType: 'tasks'

  },
  attrs: {
    name: attr(),
    status: attr(),
    createdAt: attr(),
  },
})
