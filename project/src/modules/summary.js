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
		if(!cart.totalPrice()){
			return 0;
		}		
		return parseInt(wrapper.querySelector('.' + settings.POSTAGES_WRAPPER_DOM_CLASS + ' input[type="radio"]:checked').dataset.price, 10);					
	}
	
	/**
	 * Get the payment price
	 * @arg {Object} wrapper - DOM node
	 * @return {number}
	 */
	function getPaymentPrice( wrapper ){
		if(!cart.totalPrice()){
			return 0;
		}				
		return parseInt(wrapper.querySelector('.' + settings.PAYMENTS_WRAPPER_DOM_CLASS + ' input[type="radio"]:checked').dataset.price, 10);					
	}
	
	/**
	 * Get summary of order
	 * @return {Object}
	 */
	function getSummary(){
		var summary = {};

		summary.subTotal = cart.totalPrice();
		summary.totalPostagePrice = getPostagePrice( document.getElementById( settings.CHECKOUT_DOM_ID) ) + getPaymentPrice( document.getElementById( settings.CHECKOUT_DOM_ID));
		summary.totalPrice = cart.totalPrice() + summary.totalPostagePrice;
		
		return summary;
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
			cartObj.summary = getSummary();								
											
			wrapper.innerHTML = summaryTemplate( cartObj );								
		},
		
		/**
		 * Convert the summary to the string representation
		 * @return {string}
		 */
		toString:function(){
			var cartObj = storage.get( settings.CART_STORAGE_KEY );
			cartObj.summary = getSummary();			
			return JSON.stringify( cartObj ).replace(/\"/g,"'");		
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
