import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Stats from 'stats-js';

var stats = new Stats();
stats.setMode(1);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';	
document.body.appendChild( stats.domElement );
setInterval( function () {
	stats.begin();
	ReactDOM.render(<App/>, document.getElementById('root'));
	stats.end();
}, 1000 / 60 );