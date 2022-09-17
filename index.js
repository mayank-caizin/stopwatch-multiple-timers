import {StopWatch} from './stopwatch.js';

document.addEventListener("DOMContentLoaded", () => {
    let timers = 1;

    new StopWatch('name', 'timer', 'controls');

    let addButton = document.getElementById('add-timer');
    addButton.addEventListener('click', () => {
        timers++;

        let name = "name-" + timers;
        let timer = "timer-" + timers;
        let controls = "controls-" + timers;

        createStopWatch(name, timer, controls);
        new StopWatch(name, timer, controls);
    });

    function createStopWatch(name, timer, controls) {
        let newStopWatch = document.createElement('div');
        newStopWatch.classList.add('stopwatch');

        let newH1 = document.createElement('h1');
        newH1.setAttribute('id', name);
        newH1.classList.add('name')
        let newTxt = document.createTextNode('StopWatch ' + timers);
        newH1.appendChild(newTxt);

        let newTimer = document.createElement('div');
        newTimer.classList.add('timer');
        newTimer.setAttribute('id', timer);
        let newSpan = document.createElement('span');
        newSpan.classList.add('time');
        let newTime = document.createTextNode('00:00:00');
        newSpan.appendChild(newTime);
        newTimer.appendChild(newSpan);

        let newControls = document.createElement('div');
        newControls.setAttribute('id', controls);
        newControls.classList.add('controls');

        let newToggleButton = document.createElement('button');
        newToggleButton.classList.add('toggle-btn');
        newToggleButton.classList.add('btn');
        let newToggleImage = document.createElement('img');
        newToggleImage.src = "icons/play-button.svg";
        newToggleImage.classList.add('toggle');
        newToggleButton.appendChild(newToggleImage);

        let newResetButton = document.createElement('button');
        newResetButton.classList.add('reset-btn');
        newResetButton.classList.add('btn');
        let newResetImage = document.createElement('img');
        newResetImage.src = "icons/reset-button.svg";
        newResetImage.classList.add('reset');
        newResetButton.appendChild(newResetImage);

        newControls.appendChild(newToggleButton);
        newControls.appendChild(newResetButton);

        newStopWatch.appendChild(newH1);
        newStopWatch.appendChild(newTimer);
        newStopWatch.appendChild(newControls);

        let container = document.getElementById('container');
        container.insertBefore(newStopWatch, container.children[container.children.length - 1]);
    }
});