'use strict';

const container = function (el='div') {
	this.node = document.createElement(el);
	this.node.style.height = '100vh';
};

export default container;

container.prototype = {
	setHeader: function (header){
		return this;
	},
	
	setContent: function (content){
		return this;
	},
	
	setFooter: function (footer) {
		return this;
	},
	
	setBanner: function (banner) {
		return this;
	},
};