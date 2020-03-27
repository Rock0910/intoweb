'use strict';

import Container from '../container/container.js';

export default function () {
	let intoweb = new Container('div');
	
	return intoweb.setHeader(banner())
		.setFooter(footer())
		.setContent(content());
};