"use strict";

var extend = require('extend');

var defaultConfig = {
	
	};
	
	function page2(selectorConfig) {
    if (!(this instanceof page2)) {
        return new page2(selectorConfig);
    }
    extend(this, defaultConfig);

    if (selectorConfig) {
        extend(this, selectorConfig);
    }
}


page2.prototype.dummyfunction = function(username) {
    var a = 0;
    return a;

}



module.exports = page2;