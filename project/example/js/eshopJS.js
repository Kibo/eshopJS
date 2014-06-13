/* E-shop v0.2.0 - 2014-06-13 */
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
	PRODUCT_DOM_CLASS:"product",
	
	/**
	 * DOM wrapper for product title
	 * @constant
     * @type {string}
	 */
	PRODUCT_TITLE_DOM_CLASS:"product-title",
	
	/**
	 * DOM wrapper for product price
	 * @constant
     * @type {string}
	 */
	PRODUCT_PRICE_DOM_CLASS:"product-price",
	
	/**
	 * DOM wrapper for product variations
	 * @constant
     * @type {string}
	 */
	PRODUCT_VARIATIONS_DOM_CLASS:"product-variations",
	
	/**
	 * Class name for add link button
	 * @constant
     * @type {string}
	 */
	PRODUCT_LINK_DOM_CLASS: "add-to-cart",
	
	/**
	 * DOM wrapper for cart
	 * @constant
     * @type {string}
	 */
	CART_DOM_ID:"cart",
	
	/**
	 * Key for cart in storage
	 * @constant
     * @type {string}
	 */
	CART_STORAGE_KEY:"ESHOP_JS",	
};

// ### Source: project/src/templates/templates.js
window.ESHOP_JS.templates = {
  "cart": "<table class=\"table table-striped table-bordered\"><thead><tr><th>Product</th><th>Details</th><th>Count</th><th>Price</th><th>&nbsp;</th></tr></thead><tbody><% if( products.length === 0){%><tr><td colspan=\"5\">There are not products yet.</td></tr><% } %><% for (var idx = 0, len = products.length; idx < len; idx ++) { %><tr><td><%= products[idx].title %></td><td><%= products[idx].variations %></td><td><input type=\"number\" value=\"<%= products[idx].count %>\" min=\"0\" max=\"100\" step=\"1\"></td><td>$<%= products[idx].count * products[idx].price %></td><td><a href=\"#\" class=\"btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-trash\"></span> Remove</a></td></tr><% } %></tbody></table>",
  "form": "<form><%= title %></form>"
}

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

// ### Source: project/src/modules/storage.js
/**
 * Storage module
 */
ESHOP_JS.modules.storage = (function(){
		
	/*
	 * Is local storage
	 */
	function isLocalStorage(){
		try {
   			return 'localStorage' in window && window.localStorage !== null;
  		} catch (e) {
    		return false;
  		}
	};
	
	if(!isLocalStorage){
		throw {
			name:"UnsupportedAPI",
			message:"Your browser does not support LocalStorage"
		};
	}
		 	
	return{
		
		/**
		 * Get value 
 		 * @param {String} key
 		 * @return {Object}
		 */
		get:function( key ){			
			var itm = localStorage.getItem(key);						
			return itm ? JSON.parse(itm) : {};			
		},
		
		/**
		 * Save object to storage
		 * @param {String} key
 		 * @param {Object} obj
		 */		
		save:function( key, obj ){
			localStorage.setItem(key, JSON.stringify(obj));
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


// ### Source: project/src/modules/product.js
/**
 * Products module
 */
ESHOP_JS.modules.product = (function( window, document ){
	var settings = ESHOP_JS.settings;
	var utils = ESHOP_JS.utils;
	var cart = ESHOP_JS.modules.cart;
			
	function addToCartHandler(e){
		var productWrapper = e.target.parentNode;
		
		var title = productWrapper.querySelector("." + settings.PRODUCT_TITLE_DOM_CLASS).innerHTML;											
		var variations = getSelectedVariations( productWrapper.querySelectorAll("." + settings.PRODUCT_VARIATIONS_DOM_CLASS) );
				  											
		cart.add({title:title, variations:variations.text.join(", "), count:1, price:getPrice( parseInt(productWrapper.querySelector("." + settings.PRODUCT_PRICE_DOM_CLASS).dataset.base ,10), variations.price )});							
		
		e.preventDefault();		
	};
	
	/**
	 * Get selected variations of product
	 * @param{Array} selects - list of HTML selects
	 * @return{Object}
	 */
	function getSelectedVariations( selects ){		
		var text = [];
		var price = [];
		for(var idx = 0, len = selects.length; idx < len; idx++ ){			
			text.push(selects[idx].options[selects[idx].selectedIndex].text);
			price.push( parseInt(selects[idx].options[selects[idx].selectedIndex].value, 10) );									
		}	
			
		return {text:text, price:price};
	};
		
	/**
	 * Get price of product 
	 * @param {Number} basePrice
	 * @param {Array} variations - selected variations prices
	 * @return {Integer}
	 */
	function getPrice( basePrice, variations ){			
		
		if( variations.length === 0 ){
			return basePrice;
		}
				
		var variationPrices = variations.reduce( function(a, b) {
    		return a + b;
		});
		
		return variationPrices + basePrice;
	};
	
	// set add to cart handler
	var links = document.querySelectorAll("." + settings.PRODUCT_LINK_DOM_CLASS);
	for(var idx = 0, len = links.length; idx < len; idx++ ){				
		links[idx].addEventListener( utils.isTouchDevice( ) ? "touchstart" : "mousedown", addToCartHandler, false );		
	}
	
	// show price
	//TODO
	
	// set change price handler
	//TODO
					
})( window, document );
