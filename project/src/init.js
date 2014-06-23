/**
 * Eshop initialization
 * @param {String=} lang
 */
ESHOP_JS.init = function( lang ){			
	ESHOP_JS.settings.messages = ESHOP_JS.messages[ lang || "en" ];	
	ESHOP_JS.modules.product.init();
	ESHOP_JS.modules.cart.init();
	ESHOP_JS.modules.checkout.init();
	ESHOP_JS.modules.summary.init();
};