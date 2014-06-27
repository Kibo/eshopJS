/**
 * Checkout module
 */
ESHOP_JS.modules.summary = (function( window, document ){
	
	var pubsub = ESHOP_JS.modules.pubsub;	
	var settings = ESHOP_JS.settings;	
	var storage = ESHOP_JS.modules.storage;
	var cart = ESHOP_JS.modules.cart;
	var summaryTemplate = ESHOP_JS.modules.templateEngine.compile( ESHOP_JS.templates.summary );

	/**
	 * Get the postage price
	 * @arg {Object} wrapper - DOM node
	 * @return {number}
	 */
	function getPostagePrice( wrapper ){		
		return parseInt(wrapper.querySelector('.' + settings.POSTAGES_WRAPPER_DOM_CLASS + ' input[type="radio"]:checked').dataset.price, 10);					
	}
	
	/**
	 * Get the payment price
	 * @arg {Object} wrapper - DOM node
	 * @return {number}
	 */
	function getPaymentPrice( wrapper ){		
		return parseInt(wrapper.querySelector('.' + settings.PAYMENTS_WRAPPER_DOM_CLASS + ' input[type="radio"]:checked').dataset.price, 10);					
	}
	
	return{					
		/**
		 * Redraw the summary
		 */
		refresh:function(){			
			var wrapper = document.getElementById( settings.SUMMARY_DOM_ID ); 
			
			if(!wrapper){
				return;
			}			
		
			var cartObj = storage.get( settings.CART_STORAGE_KEY );
			cartObj.settings = ESHOP_JS.settings;
			
			cartObj.summary = {};								
			cartObj.summary.subTotal = cart.totalPrice();
			cartObj.summary.totalPostagePrice = cart.totalPrice() ? getPostagePrice( document.getElementById( settings.CHECKOUT_DOM_ID) ) + getPaymentPrice( document.getElementById( settings.CHECKOUT_DOM_ID)) : 0;
			cartObj.summary.totalPrice = cart.totalPrice() ? cart.totalPrice() + cartObj.summary.totalPostagePrice : 0;
								
			wrapper.innerHTML = summaryTemplate( cartObj );								
		},
		
		/**
	 	* Module initialization
	 	*/
		init:function(){
			this.refresh();
			
			pubsub.subscribe(settings.CART_CHANGE_EVENT_NAME, function(e){
				ESHOP_JS.modules.summary.refresh();										
			});	
			
			pubsub.subscribe(settings.CHECKOUT_CHANGE_EVENT_NAME, function(e){
				ESHOP_JS.modules.summary.refresh();										
			});							
		}
	};
	
})( window, document );
