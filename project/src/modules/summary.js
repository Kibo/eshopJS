/**
 * Checkout module
 */
ESHOP_JS.modules.summary = (function( window, document ){
	
	var pubsub = ESHOP_JS.modules.pubsub;	
	var settings = ESHOP_JS.settings;	
	var storage = ESHOP_JS.modules.storage;
	var summaryTemplate = ESHOP_JS.modules.templateEngine.compile( ESHOP_JS.templates.summary );

	// TODO 234
		
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
