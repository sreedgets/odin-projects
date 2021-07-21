import _ from 'lodash';
import myName from './myName';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());



function component2() {
    const element = document.createElement('div');

    element.innerHTML = myName('Cwosant');
    return element;
}

document.body.appendChild(component2());