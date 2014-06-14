/* E-shop v0.2.0 - 2014-06-14 */
// ### Source: project/src/namespace.js
var ESHOP_JS = ESHOP_JS || {};

/**
 * Create namespace
 * @param {String} ns_string
 * @example
 * ESHOP_JS.namespace('modules.module1');
 */
ESHOP_JS.namespace = function( ns_string ) {
	var parts = ns_string.split( '.' ), 
	parent = ESHOP_JS; 

	// strip redundant leading global
	if( parts[ 0 ] === "ESHOP_JS" ) {
		parts = parts.slice( 1 );
	}
	for( var i = 0; i < parts.length; i += 1 ) {
		// create a property if it doesn't exist
		if( typeof parent[ parts[ i ] ] === "undefined" ) {
			parent[ parts[ i ] ] = {};
		}

		parent = parent[ parts[ i ] ];
	}
	return parent;
};

/* ## NAMESPACES ############## */
ESHOP_JS.namespace('modules');


// ### Source: project/src/utils.js
ESHOP_JS.utils = (function( window, document){
		
	return {
		
		/**
	 	* Is touch device
	 	* @return {boolean}
	 	*/		
		isTouchDevice:function(){
			return ( 'ontouchstart' in document.documentElement );	
		}		
	};	
})(  window, document );



	

// ### Source: project/src/settings.js
ESHOP_JS.settings = {

	/**
	 * DOM wrapper for product
	 * @constant
	 * @type {string}
	 */
	PRODUCT_DOM_CLASS: "product",

	/**
	 * DOM wrapper for product title
	 * @constant
	 * @type {string}
	 */
	PRODUCT_TITLE_DOM_CLASS: "product-title",

	/**
	 * DOM wrapper for product price
	 * @constant
	 * @type {string}
	 */
	PRODUCT_PRICE_DOM_CLASS: "product-price",
		
	/**
	 * DOM data atribute for base product price
	 * @constant
	 * @type {string}
	 */
	PRODUCT_BASE_PRICE_DOM_ATTRIBUTE: "data-base-price",
	
	/**
	 * DOM wrapper for product variations
	 * @constant
	 * @type {string}
	 */
	PRODUCT_VARIATIONS_DOM_CLASS: "product-variations",

	/**
	 * Class name for add link button
	 * @constant
	 * @type {string}
	 */
	PRODUCT_LINK_DOM_CLASS: "add-to-cart",
	
	/**
	 * Class name for remove from shopping cart link
	 * @constant
	 * @type {string}
	 */
	REMOVE_FROM_CART_DOM_CLASS: "btn-remove",
	
	/**
	 * DOM wrapper for cart
	 * @constant
	 * @type {string}
	 */
	CART_DOM_ID: "cart",

	/**
	 * Key for cart in storage
	 * @constant
	 * @type {string}
	 */
	CART_STORAGE_KEY: "ESHOP_JS",
	
	/**
	 * Cart change event name
	 * @constant
	 * @type {string}
	 */
	CART_CHANGE_EVENT_NAME: "cartchange"	
}; 

// ### Source: project/src/modules/pubsub.js
/**
 * Pub/ sub module
 */
ESHOP_JS.modules.pubsub = (function(){	
	var topics = {};
	var subUid = -1;	
	
	return{
		
		/**
		 * Publish a message
		 * @param {String} type
		 * @param {Object} message
		 * @return {boolean}
		 */
		publish:function( type, message ){
			if ( !topics[type] ) {
				return false;
			}	

			var subscribers = topics[type];
			var len = subscribers ? subscribers.length : 0;

			while (len--) {
				subscribers[len].func( message );
			}

			return this;				
		},
		
		/**
		 * Subscribe a new subscriber
		 * @param {String} type
		 * @param {Function} func
		 * @return {String} token
		 */
		subscribe:function(type, func){
			if (!topics[type]) {
				topics[type] = [];
			}

			var token = (++subUid).toString();
			topics[type].push({
				token: token,
				func: func
			});

			return token;			
		},
		
		/**
		 * Unsubscribe from a specific topic
		 * @param {String} token
		 */
		unsubscribe:function( token ){			
			for ( var m in topics ) {
				if ( topics[m] ) {
					for (var i = 0, j = topics[m].length; i < j; i++) {
						if (topics[m][i].token === token) {
							topics[m].splice(i, 1);
							return token;
						}
					}
				}
			}
			
			return this;					
		}				
	};	
})();

// ### Source: project/src/templates/templates.js
window.ESHOP_JS.templates = {
  "cart": "<h3>Shopping cart</h3><table class=\"table table-striped table-bordered\"><thead><tr><th>Product</th><th>Details</th><th>Count</th><th>Price</th><th>&nbsp;</th></tr></thead><tbody><% if( products.length === 0){%><tr><td colspan=\"5\">There are not products yet.</td></tr><% } %><% for (var idx = 0, len = products.length; idx < len; idx ++) { %><tr><td><%= products[idx].title %></td><td><%= products[idx].variations %></td><td><input type=\"number\" value=\"<%= products[idx].count %>\" min=\"1\" max=\"100\" step=\"1\" data-idx=\"<%=idx%>\"></td><td>$<%= products[idx].count * products[idx].price %></td><td><a href=\"#cart\" class=\"btn btn-danger btn-xs btn-remove\" title=\"Remove\" data-idx=\"<%=idx%>\"><span class=\"glyphicon glyphicon-trash\"></span></a></td></tr><% } %></tbody></table>",
  "form": "<form><%= title %></form>"
}

// ### Source: project/src/modules/storage.js
/**
 * Storage module
 */
ESHOP_JS.modules.storage = (function(){
		
	/*
	 * Is session storage
	 */
	function isSessionStorage(){
		try {
   			return 'sessionStorage' in window && window.sessionStorage !== null;
  		} catch (e) {
    		return false;
  		}
	};
	
	if(!isSessionStorage()){
		throw {
			name:"UnsupportedAPI",
			message:"Your browser probably does not support SessionStorage"
		};
	}
		 	
	return{
		
		/**
		 * Get value 
 		 * @param {String} key
 		 * @return {Object}
		 */
		get:function( key ){			
			var itm = sessionStorage.getItem(key);						
			return itm ? JSON.parse(itm) : {};			
		},
		
		/**
		 * Save object to storage
		 * @param {String} key
 		 * @param {Object} obj
		 */		
		save:function( key, obj ){
			sessionStorage.setItem(key, JSON.stringify(obj));
		},		
	};
})();

// ### Source: project/src/modules/template-engine.js
/**
 * Template engine module
 */
ESHOP_JS.modules.templateEngine = (function(){
		
	return{
				
		/**
		 * Compile a template
		 * @param {String} tpl
		 * @return {Function}
		 * 	 
		 * @example
		 * var data = {name:"tomas"};
		 * var tpl = '<h1><%=name%></h1>';
		 * var template = ESHOP_JS.modules.templateEngine.compile( tpl );
		 * var html = template( data );
		 * 
		 * @see http://ejohn.org/blog/javascript-micro-templating/
		 */
		compile:function( tpl ){							
			return new Function("data",
				"var p=[];" +              
				"with( data ){ p.push('" +             
				 tpl
		  			.replace(/[\r\t\n]/g, " ")
		  			.split("<%").join("\t")
		  			.replace(/((^|%>)[^\t]*)'/g, "$1\r")
		  			.replace(/\t=(.*?)%>/g, "',$1,'")
		  			.split("\t").join("');")
		  			.split("%>").join("p.push('")
		  			.split("\r").join("\\'")
	      			+ "');} return p.join('');");
		}		
	};	
})();



// ### Source: project/src/modules/cart.js
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


// ### Source: project/src/modules/product.js
/**
 * Products module
 */
ESHOP_JS.modules.product = (function( window, document ){
	
	var settings = ESHOP_JS.settings;
	var utils = ESHOP_JS.utils;
	var cart = ESHOP_JS.modules.cart;
	
		
	/**
	* Calculate price of product
	* @param {Object} productDOMWrapper
	* @return{Number}
	* @private
	*/
	function getPrice( productDOMWrapper ){		
		var basePrice = parseInt( productDOMWrapper.querySelector('[' + settings.PRODUCT_BASE_PRICE_DOM_ATTRIBUTE + ']').getAttribute(settings.PRODUCT_BASE_PRICE_DOM_ATTRIBUTE));			
		return basePrice + getVariationsPrice( productDOMWrapper );
	};
	
	/**
	 * Get selected variations from product
	 * @param {Object} productDOMWrapper
	 * @return {Object}
	 */
	function getVariations( productDOMWrapper ){
		
		var variations = productDOMWrapper.querySelectorAll("." + settings.PRODUCT_VARIATIONS_DOM_CLASS);
		
		var texts = [];
		var prices = [];			
		for(var idx = 0, len = variations.length; idx < len; idx++ ){
			
			switch (variations[idx].tagName) {
			  case "SELECT":
			    texts.push(variations[idx].options[variations[idx].selectedIndex].text);
				prices.push( parseInt(variations[idx].options[variations[idx].selectedIndex].value, 10) );	
			    break;
			  
			  default:
			   	throw{
			   		name:"UnsupportedVariationsElementException",
			   		message:"Variation uses a unsupported tag: " + variations[idx].tagName
			   	};
			}			
											
		}
				
		return {texts:texts, prices:prices};		
	};
	
	/**
	 * Get text from selected variations
	 * @param {Object} productDOMWrapper
	 * @return {String}
	 */
	function getVariationsText( productDOMWrapper ){
		return getVariations( productDOMWrapper ).texts.join(", ");
	};
	
	/**
	 * Calculate price from selected variations
	 * @param {Object} productDOMWrapper
	 * @return {Number}
	 */
	function getVariationsPrice( productDOMWrapper ){
		var prices = getVariations( productDOMWrapper ).prices;
		
		if( prices.length === 0 ){
			return 0;
		}
		
		return prices.reduce( function(a, b) {
    		return a + b;
		});
	};
	
	/**
	 * Set add to cart handler
	 */		
	function addToCartHandler( productDOMWrapper ){
		var links = productDOMWrapper.querySelectorAll("." + settings.PRODUCT_LINK_DOM_CLASS);
		for(var idx = 0, len = links.length; idx < len; idx++ ){
			links[idx].addEventListener( utils.isTouchDevice( ) ? "touchstart" : "mousedown", function(e){
				var productDOMWrapper = e.target.parentNode;				
				ESHOP_JS.modules.cart.add( ESHOP_JS.modules.product.getData( productDOMWrapper ));
				e.preventDefault();	
			}, false );	
		}	
	};
	
	/**
	 * Set change variations handler
	 */	
	function changeVariationHandler( productDOMWrapper ){
		var variations = productDOMWrapper.querySelectorAll("." + settings.PRODUCT_VARIATIONS_DOM_CLASS);
		
		for(var idx = 0, len = variations.length; idx < len; idx++ ){
			
			if( variations[idx].tagName === "SELECT" ){
				variations[idx].addEventListener("change", function(e){					
					ESHOP_JS.modules.product.refreshPrice( e.target.parentNode );																									 
				}, false);
			}			
		}		
	};
			
	return{
		/**
		 * Get data from DOM 
 		 * @param {Object} productDOMWrapper
 		 * @return {Object} product
 		 * 
 		 * @see ESHOP_JS.settings.PRODUCT_DOM_CLASS
		 */
		getData:function( productDOMWrapper ){											
			return {
				title:productDOMWrapper.querySelector("." + settings.PRODUCT_TITLE_DOM_CLASS).innerHTML, 
				variations:getVariationsText( productDOMWrapper ), 
				count:1, 
				price:getPrice( productDOMWrapper )
				};				
		},
		
		/**
		 * Set the necessary handlers
		 * @param {Object} productDOMWrapper
		 * 
		 * @see ESHOP_JS.settings.PRODUCT_DOM_CLASS
		 */
		setHandlers:function( productDOMWrapper ){							
			addToCartHandler( productDOMWrapper );
			changeVariationHandler( productDOMWrapper );			
		},
					
		/**
		 * Refresh a product price
		 * for instance: after change variations of product
		 */
		refreshPrice:function( productDOMWrapper ){
			var priceDOMWrappers = productDOMWrapper.querySelectorAll("." + settings.PRODUCT_PRICE_DOM_CLASS);
			var price = getPrice( productDOMWrapper );
			for(var idx = 0, len = priceDOMWrappers.length; idx < len; idx++){
				priceDOMWrappers[idx].innerHTML = price;				
			}					
		},
		
		/**
	 	* Module initialization
	 	*/
		init:function(){
			var products = document.querySelectorAll("." + settings.PRODUCT_DOM_CLASS);		
			for(var idx = 0, len = products.length; idx < len; idx++){
				this.refreshPrice( products[idx] );										
				this.setHandlers( products[idx] );						
			}	
		}			
	};
					
})( window, document );


// ### Source: project/src/init.js
/**
 * Eshop initialization
 */
ESHOP_JS.init = function(){	
	ESHOP_JS.modules.product.init();
	ESHOP_JS.modules.cart.init();	
};