import { CHANGE_LEFT_NAV_INDEX } from './actionTypes.js'

const defaultState = {
  leftIndex:5
}

export default (state=defaultState,action) => {
  if(action.type === 'change_left_nav_index'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.leftIndex = action.value
    return newState
  }
  return state
}