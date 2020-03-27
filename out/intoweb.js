(function () {
	'use strict';

	var container = function container() {
	  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
	  this.node = document.createElement(el);
	  this.node.style.height = '100vh';
	};
	container.prototype = {
	  setHeader: function setHeader(header) {
	    return this;
	  },
	  setContent: function setContent(content) {
	    return this;
	  },
	  setFooter: function setFooter(footer) {
	    return this;
	  },
	  setBanner: function setBanner(banner) {
	    return this;
	  }
	};

	function Intoweb () {
	  var intoweb = new container('div');
	  return intoweb.setHeader(banner()).setFooter(footer()).setContent(content());
	}

	window.addEventListener('load', function () {
	  var intoweb = Intoweb();
	  document.getElementsByTagName('html')[0].style.height = '100vh';
	  document.body.style.height = '100vh';
	  document.body.style.margin = '0';
	  document.body.appendChild(intoweb.node);
	});

}());
//# sourceMappingURL=intoweb.js.map
