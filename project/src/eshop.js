




/**
 * Create a new Eshop
 * @contructor
 * @param {Object} setting
 * @param {Object} templates
 */
var ONE_PAGE_SHOP = function( setting, templates ){
	this.setting = setting;
	this.templates = templates;	
};

_p = ONE_PAGE_SHOP.prototype;

//_p.publish

(function(){
	
	/**
	 * Default namespace for this app
	 * @constant
	 * @type {string}
	 */
	var APP_NAME = "eshop";
	
	/**
	 * @constructor
	 */
	function Eshop(){}
	
	_p = Eshop.prototype;
	
	window[APP_NAME] = new Eshop();
	
})(window, document);