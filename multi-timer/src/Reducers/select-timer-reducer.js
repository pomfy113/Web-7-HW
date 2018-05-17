import { SELECT_TIMER } from '../Actions'

const selectTimerReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_TIMER:
      // Return the index of the new timer

    default:
      return state
  }
}

export default selectTimerReducer
