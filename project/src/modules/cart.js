/**
 * Shopping cart module
 */
ESHOP_JS.modules.cart = (function( window, document ){
	
	var EMPTY_STORAGE = {products:[]};
	
	var utils = ESHOP_JS.utils;
	var pubsub = ESHOP_JS.modules.pubsub;	
	var settings = ESHOP_JS.settings;
	var storage = ESHOP_JS.modules.storage;
	var cartTemplate = ESHOP_JS.modules.templateEngine.compile( ESHOP_JS.templates.cart );	
			
	/* Validate product
	 * @param {Object} product
	 * @return {boolean}
	 */
	function validate( product ){
		var result = true;		
		var errors = [];
		// TODO						
		
		return {
			isValid: result,
			obj: product,
			errors:errors			
		};
	};
	
	/**
	 * Contains an array of products a product?
	 * @param {Array} products
	 * @param {Object} product
	 * @return {Object}
	 */
	function contains( products, product ){		
		var response = {result:false, index:null};
					
		for(var idx = 0, len = products.length; idx < len; idx++ ){
			if( product.title === products[idx].title 
				&& product.variations === products[idx].variations 
				&& product.price === products[idx].price ){
					response.result = true;
					response.index = idx;
					break;		
			}
		}	
		
		return response;
	}
	
	/**
	 * Set change counter handler
	 * @param {Object} cartDOMWrapper - DOM
	 * @private
	 */
	function setChangeCountHandler( cartDOMWrapper){			
		var counters = cartDOMWrapper.querySelectorAll("input[type='number']");
		for(var idx = 0, len = counters.length; idx < len; idx++ ){
			counters[idx].addEventListener("change", function(e){
				var counter = e.target;
				var products = storage.get( settings.CART_STORAGE_KEY ).products;
				products[ counter.dataset.idx ].count = counter.value;
				storage.save(settings.CART_STORAGE_KEY, {products:products}); 
				
				ESHOP_JS.modules.pubsub.publish( settings.CART_CHANGE_EVENT_NAME );				
			}, false);
		}
	}
	
	/**
	 * Set remove product handler
	 * @param {Object} cartDOMWrapper - DOM
	 * @private
	 */
	function setRemoveProductHandler( cartDOMWrapper ){
		var links = cartDOMWrapper.querySelectorAll("." + settings.REMOVE_FROM_CART_DOM_CLASS);
		for(var idx = 0, len = links.length; idx < len; idx++ ){
			links[idx].addEventListener( utils.isTouchDevice( ) ? "touchstart" : "mousedown", function(e){
			
				var products = storage.get( settings.CART_STORAGE_KEY ).products;
				products.splice( e.target.dataset.idx, 1 );
				storage.save(settings.CART_STORAGE_KEY, {products:products}); 
				
				ESHOP_JS.modules.pubsub.publish( settings.CART_CHANGE_EVENT_NAME );	
			},false);	
		}			
	}
		
	// init storage
	if(!storage.get( settings.CART_STORAGE_KEY ).products){
		storage.save(settings.CART_STORAGE_KEY, EMPTY_STORAGE );		
	}
			
	return{
								
		/**
		 * Add product to the shoping cart 
 		 * @param {Object} product
 		 * @fires CART_CHANGE_EVENT_NAME
		 */
		add:function( product ){							
			var validateResult = validate( product ); 	
			if( !validateResult.isValid ){
				throw{
					name:"ValidationException",
					message: validateResult.message.join(", "),
					obj:product
				};
			}
			
			var products = storage.get( settings.CART_STORAGE_KEY ).products;
						
			var cartResponse = contains(products, product);
			if( cartResponse.result ){				
				products[cartResponse.index].count++; 					
			}else{
				products.push( product );	
			}
																			
			storage.save(settings.CART_STORAGE_KEY, {products:products}); 
						
			pubsub.publish( settings.CART_CHANGE_EVENT_NAME );						
		},
		
		/**
		 * Remove product form cart
		 * @param {Object}
		 * @fires CART_CHANGE_EVENT_NAME
		 */
		remove:function( product ){
			
			var products = storage.get( settings.CART_STORAGE_KEY ).products;
						
			var cartResponse = contains(products, product);
			if(cartResponse.index !== 'null'){
				products.splice(cartResponse.index, 1);
			}
			
			storage.save(settings.CART_STORAGE_KEY, {products:products});
			
			pubsub.publish( settings.CART_CHANGE_EVENT_NAME );
		},
		
		/**
		 * Empties the cart
		 * @fires CART_CHANGE_EVENT_NAME
		 */
		reset:function(){
			storage.save(settings.CART_STORAGE_KEY, EMPTY_STORAGE );
			
			pubsub.publish( settings.CART_CHANGE_EVENT_NAME );
		},
		
		/**
		 * Get count of items in shopping cart
		 * @return {Mumber}
		 */
		count:function(){
			return storage.get( settings.CART_STORAGE_KEY ).products.length;	
		},
		
		/**
		 * Redraw the shopping cart
		 */
		refresh:function(){
			var wrapper = document.getElementById( settings.CART_DOM_ID );
			if(!wrapper){
				return;
			}			
			
			wrapper.innerHTML = cartTemplate( storage.get( settings.CART_STORAGE_KEY ));	
			
			setChangeCountHandler( wrapper );
			setRemoveProductHandler( wrapper );
		},
		
		/**
	 	* Module initialization
	 	*/	
		init:function(){
			this.refresh();
			
			pubsub.subscribe(settings.CART_CHANGE_EVENT_NAME, function(e){
				ESHOP_JS.modules.cart.refresh();	
			});					
		}				
	};	
})( window, document);
