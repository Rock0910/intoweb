'use strict';
import Intoweb from './intoweb/intoweb.js';

window.addEventListener('load',() => {
	let intoweb = Intoweb();
	
	document.getElementsByTagName('html')[0].style.height = '100vh';
	
	document.body.style.height = '100vh';
	document.body.style.margin = '0';
	
	document.body.appendChild(intoweb.node);
});
