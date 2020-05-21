import {Store} from '@captaincodeman/rdx';

// our application's state
const initialState = {
    message: '',
    numClicks: 0,
}

// the reducer: how to get from one state to the next
const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'hello':
            return {...state, message: 'Hello, rdx!', numClicks: state.numClicks + 1}
        case 'howdy':
            return {...state, message: 'Howdy, rdx!', numClicks: state.numClicks + 1}
        case 'hi':
            return {...state, message: 'Hi, rdx!', numClicks: state.numClicks + 1}
        default:
            return state;
    }
};

// the store is the engine for managing the state
export const store = new Store(initialState, greetingReducer);