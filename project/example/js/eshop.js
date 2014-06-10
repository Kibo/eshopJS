/* E-shop v0.0.1 - 2014-06-10 */
// ### Source: project/src/namespace.js
var ONE_PAGE_SHOP = ONE_PAGE_SHOP || {};

/**
 * Create namespace
 * @param {String} ns_string
 * @example
 * ONE_PAGE_SHOP.namespace('modules.module1');
 */
ONE_PAGE_SHOP.namespace = function( ns_string ) {
	var parts = ns_string.split( '.' ), 
	parent = ONE_PAGE_SHOP; 

	// strip redundant leading global
	if( parts[ 0 ] === "ONE_PAGE_SHOP" ) {
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
ONE_PAGE_SHOP.namespace('modules');


// ### Source: project/src/templates/templates.js
window.ONE_PAGE_SHOP.templates = {
  "cart": "<h1><%= title %></h1>",
  "form": "<form><%= title %></form>"
}

// ### Source: project/src/modules/cart.js
/**
 * Shopping cart module
 */
ONE_PAGE_SHOP.modules.cart = (function(){
	
	// TODO	
	return{
		add:function(product){},
		remove:function(id){},
		draw:function(){}		
	};
})();


// ### Source: project/src/modules/pubsub.js
/**
 * Pub/ sub module
 */
ONE_PAGE_SHOP.modules.pubsub = (function(){	
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
ONE_PAGE_SHOP.modules.storage = (function(){
		
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
			return JSON.parse(localStorage.getItem(key));
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