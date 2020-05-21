import { store } from './store.js';

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