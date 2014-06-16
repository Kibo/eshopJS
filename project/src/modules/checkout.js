/**
 * Checkout module
 */
ESHOP_JS.modules.checkout = (function( window, document ){
	
	var utils = ESHOP_JS.utils;
	var pubsub = ESHOP_JS.modules.pubsub;	
	var settings = ESHOP_JS.settings;
	var storage = ESHOP_JS.modules.storage;
	var checkoutTemplate = ESHOP_JS.modules.templateEngine.compile( ESHOP_JS.templates.checkout );	
		
	return {
		/**
		 * Refresh
		 */
		refresh:function(){
			var wrapper = document.getElementById( settings.CHECKOUT_DOM_ID );
			if(!wrapper){
				return;
			}			
			
			var cartObj = storage.get( settings.CART_STORAGE_KEY );
			cartObj.settings = ESHOP_JS.settings;
			wrapper.innerHTML = checkoutTemplate( cartObj );			
		},
		
		/**
	 	* Module initialization
	 	*/	
		init:function(){
			this.refresh();
			
			pubsub.subscribe(settings.CART_CHANGE_EVENT_NAME, function(e){
				ESHOP_JS.modules.checkout.refresh();										
			});					
		}			
	};	
})( window, document );
