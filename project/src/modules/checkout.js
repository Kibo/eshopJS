/**
 * Checkout module
 */
ESHOP_JS.modules.checkout = (function( window, document ){
	
	var utils = ESHOP_JS.utils;
	var pubsub = ESHOP_JS.modules.pubsub;	
	var settings = ESHOP_JS.settings;
	var storage = ESHOP_JS.modules.storage;
	var checkoutTemplate = ESHOP_JS.modules.templateEngine.compile( ESHOP_JS.templates.checkout );
		
	/**
	 * Set change handlers
	 * @param {Object} wrapper - DOM wrapper
	 */
	function setChangeHandlers( wrapper ){
		var radios = wrapper.querySelectorAll('input[type="radio"]');		
		for(var idx = 0, len = radios.length; idx < len; idx++ ){
			radios[idx].addEventListener("change", function(e){										
				pubsub.publish( settings.CHECKOUT_CHANGE_EVENT_NAME );						
			}, false);	
		}		
	}
			
	return {	
		
		/**
		 * Show checkout form
		 */
		show:function(){
			var wrapper = document.getElementById( settings.CHECKOUT_DOM_ID ); 
			
			if(!wrapper){
				return;
			}			
		
			var cartObj = storage.get( settings.CART_STORAGE_KEY );
			cartObj.settings = ESHOP_JS.settings;							
			wrapper.innerHTML = checkoutTemplate( cartObj );
			
			setChangeHandlers( document.getElementById( settings.CHECKOUT_DOM_ID ) );			
		},		
		
		/**
	 	* Module initialization
	 	*/	
		init:function(){		
			this.show();										
		}			
	};	
})( window, document );
