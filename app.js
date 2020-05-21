// our applications state: the message to display
let message = "";
let numClicks = 0;

function updateGreeting() {
    const el = document.getElementById('greeting');
    el.innerText = message;
}

function updateCounter() {
    const el = document.getElementById('counter');
    el.innerText = `Processed ${numClicks} ${numClicks === 1 ? 'click' : 'clicks'}.`;
}

// make the buttons change the message
document.getElementById('btnHello').addEventListener('click', () => {
    message = "Hello, rdx!";
    updateGreeting();
    numClicks++;
    updateCounter();
});
document.getElementById('btnHowdy').addEventListener('click', () => {
    message = "Howdy, rdx!";
    updateGreeting();
    numClicks++;
    updateCounter();
});
document.getElementById('btnHi').addEventListener('click', () => {
    message = "Hi, rdx!";
    updateGreeting();
    numClicks++;
    updateCounter();
});
