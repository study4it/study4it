import { SHOW_LEFT_MENU, HIDE_LEFT_MENU, SHOW_VK_WIDGET, HIDE_VK_WIDGET } from './action-types'

export function showLeftMenu() {
  return {
    type: SHOW_LEFT_MENU,
  }
}

export function hideLeftMenu() {
  return {
    type: HIDE_LEFT_MENU,
  }
}

export function showVKWidget() {
  return {
    type: SHOW_VK_WIDGET,
  }
}

export function hideVKWidget() {
  return {
    type: HIDE_VK_WIDGET,
  }
}
