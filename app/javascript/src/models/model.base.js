import { SpraypaintBase } from 'spraypaint'

export const BaseModel = SpraypaintBase.extend({
  static: {
    baseUrl: '',
    apiNamespace: '/api/v1'
  }
})
