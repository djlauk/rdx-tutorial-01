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
const store = new Store(initialState, greetingReducer);

// when there was an update, the store will tell us through events
store.addEventListener('state', () => {
    updateGreeting();
    updateCounter();
});

function updateGreeting() {
    const el = document.getElementById('greeting');
    el.innerText = store.state.message;
}

function updateCounter() {
    const el = document.getElementById('counter');
    const n = store.state.numClicks;
    el.innerText = `Processed ${n} ${n === 1 ? 'click' : 'clicks'}.`;
}

// make the buttons inform the store
document.getElementById('btnHello').addEventListener('click', () => {
    const action = { type: 'hello' };
    store.dispatch(action);
});
document.getElementById('btnHowdy').addEventListener('click', () => {
    const action = { type: 'howdy' };
    store.dispatch(action);
});
document.getElementById('btnHi').addEventListener('click', () => {
    const action = { type: 'hi' };
    store.dispatch(action);
});
