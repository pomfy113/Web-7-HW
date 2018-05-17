import { NEW_TIMER, RESET_TIMER, DELETE_TIMER, START_TIMER, STOP_TIMER, TOGGLE_TIMER } from '../Actions';

const timerReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_TIMER:
      // Add a new timer, return a copy of state
      return [...state, {name: action.payload.index, time: 0}]
    case RESET_TIMER:
      // Reset the timer at index, return a copy of state

    case DELETE_TIMER:
      // Remove the timer at index, return a copy of state.

    case START_TIMER:
      // Set the isRunning property of the timer at index to true, return a copy of state

    case STOP_TIMER:
      // Set the isRunning property of the timer at index to false, return a copy of state

    case TOGGLE_TIMER:
      // Invert the isRunning property of timer at index, return a copy of state

    default:
      return state;
  }
}

export default timerReducer;
