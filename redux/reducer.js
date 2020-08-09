import { SHOW_LEFT_MENU, HIDE_LEFT_MENU, SHOW_VK_WIDGET, HIDE_VK_WIDGET, LOCATION_CHANGE } from './action-types'

const initialState = {
  leftMenuIsShown: false,
  VKWidgetIsShown: false,
}

function reducer(state = initialState, action) {
  const { type } = action
  switch (type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        leftMenuIsShown: false,
      }
    case SHOW_LEFT_MENU:
      return {
        ...state,
        leftMenuIsShown: true,
      }
    case HIDE_LEFT_MENU:
      return {
        ...state,
        leftMenuIsShown: false,
      }
    case SHOW_VK_WIDGET:
      return {
        ...state,
        VKWidgetIsShown: true,
      }
    case HIDE_VK_WIDGET:
      return {
        ...state,
        VKWidgetIsShown: false,
      }
    default:
      return state
  }
}

export default reducer
