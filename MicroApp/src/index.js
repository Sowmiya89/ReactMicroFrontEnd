import React from 'react';
import ReactDOM from 'react-dom';
import MicroApp from './MicroApp';

// comment this lines when you dont want to auto run ReactDOM.render
/*const el = document.getElementById('counter-app');
ReactDOM.render(<Counter />, el);*/

window.ReactMicroApp = {
    mount: () => {
        const e2 = document.getElementById('micro-app');
        ReactDOM.render(<MicroApp />, e2);
    },
    unmount: () => {
        const e2 = document.getElementById('micro-app');
        ReactDOM.unmountComponentAtNode(e2);
    }
}