import uuidv4 from "uuid/v4";
import {findIndex} from 'lodash'

export const state = () => ({
  notifications: [],
})

export const getters = {}

export const mutations = {
  /**
   * Internal use only, use dispatch to add instead
   * @param state
   * @param notification to add
   */
  addNotification(state, notification) {
    state.notifications.push(notification)
  },

  /**
   * Remove from notification stack
   * @param state
   * @param errorId to remove
   */
  removeNotification(state, {id}) {
    const index = findIndex(state.notifications, (n) => n.id === id)
    if (index !== -1) {
      state.notifications.splice(index, 1)
    }
  },
}

const ERR_MAPPING = {
  'https://err.fuxing.dev/ExampleException': {
    type: 'error',
    timeout: 10000,
    title: 'Foo',
    message: 'Bar'
  }
}

const parseError = (error) => {
  // When error is created from $api service.
  const err = error?.error?.response?.data?.error || error?.response?.data?.error

  if (err) {
    const {url, title, message} = err

    // Attempt to map to know err url types
    const mapped = ERR_MAPPING[url]
    if (mapped) return mapped

    return {title: title, message: message}
  }

  // When error contains status code
  if (error?.statusCode === 404) {
    return {title: 'Not Found', message: 'Requested object cannot be found.'}
  }

  // When error is placed into {error: ...} object
  if (error?.error) {
    return {title: 'Unknown Error', message: error.error}
  }

  return {title: 'Unknown Error', message: error}
}

export const actions = {
  /**
   * @param commit
   * @param state
   * @param error to add to the stack for display in notification
   */
  addError({commit, state}, error) {
    console.error(error)

    const type = error?.type || 'error'
    const timeout = error?.timeout || 12000
    return this.dispatch('addMessage', {type, timeout, ...parseError(error)})
  },

  /**
   *
   * @param commit
   * @param state
   * @param object = {type, title, message} or String
   */
  addMessage({commit, state}, object) {
    if (state.notifications.length > 30) {
      console.log('Too many concurrent notification. Not added')
      return
    }

    if (typeof object === 'string') {
      object = {type: 'message', message: object, timeout: 5000}
    }

    const {type, title, message, timeout} = object
    const id = uuidv4()

    commit('addNotification', {type: type || 'message', message, title, id})
    setTimeout(() => commit('removeNotification', {id}), timeout || 5000)
  }
}
