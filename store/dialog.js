import {disableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

export const state = () => ({
  name: null,
  props: null
})

export const getters = {

  /**
   * @param state
   * @returns {string} name of the dialog
   */
  name: (state) => {
    return state.name
  },

  /**
   * @param state
   * @returns {object} props of the dialog
   */
  props: (state) => {
    return state.props
  },

  /**
   * @param state
   * @returns {boolean} whether any dialog is active
   */
  active: (state) => {
    return state.name != null
  }
}

export const mutations = {

  /**
   * @param state
   * @param object {string|{name: string, props: object, class: string}}, class is used together disableBodyScroll to
   * enable scrolling within dialog but disable scrolling outside dialog
   */
  set: (state, object) => {
    if (typeof object === 'string') {
      state.name = object
    } else {
      state.name = object.name
      state.props = object.props
    }


    if (object && object.class) {
      disableBodyScroll(document.querySelector(object.class))
    }
  },
  clear: (state) => {
    state.name = null
    state.props = null
    clearAllBodyScrollLocks()
  }
}
