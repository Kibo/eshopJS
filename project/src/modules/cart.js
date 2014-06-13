/**
 * Shopping cart module
 */
ESHOP_JS.modules.cart = (function( window, document ){
	
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
		// TODO						
		
		return {
			isValid: result,
			obj: product,
			errors:[]			
		};
	};
	
	/**
	 * If contains a product
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
		
	// init storage
	if(!storage.get( settings.CART_STORAGE_KEY ).products){
		storage.save(settings.CART_STORAGE_KEY, {products:[]} );		
	}
		
	return{
		
		/**
		 * Add product to the shoping cart 
 		 * @param {Object} product
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
			
			pubsub.publish("addtocart", product);						
		},
		
		remove:function(id){},
		
		/**
		 * Get count of items in shopping cart
		 * @return {Mumber}
		 */
		count:function(){
			return storage.get( settings.CART_STORAGE_KEY ).products.length;	
		},
		
		/**
		 * Draw the shopping cart
		 */
		draw:function(){
			var wrapper = document.getElementById( settings.CART_DOM_ID );
			if(!wrapper){
				return;
			}			
			
			wrapper.innerHTML = cartTemplate( storage.get( settings.CART_STORAGE_KEY ));	
		}		
	};	
})( window, document);
