/* E-shop v0.2.0 - 2014-06-27 */
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
ESHOP_JS.namespace('messages');


// ### Source: project/src/utils.js
ESHOP_JS.utils = (function( window, document){
		
	return {
		
		/**
	 	* Is touch device
	 	* @return {boolean}
	 	*/		
		isTouchDevice:function(){
			return ( 'ontouchstart' in document.documentElement );	
		},
		
		/**
		 * Get ther closest parent node with defined class name
		 * @param {Object} child - DOM node
 		 * @param {String} className
 		 * @return {Object} - DOM parent node
		 */
		findParentByClass:function( child, className ){
			var el = child;
						
			while( !el.classList.contains( className ) ){
				el = el.parentElement;
			}
						
    		return el;			
		}				
	};	
})(  window, document );



	

// ### Source: project/src/messages/en.js
ESHOP_JS.messages.en = {
	
	/**
	 * Type of postages
	 */
	POSTAGES:[		
		{name: "Personal collection", price: 0},
		{name: "Czech Post", price: 80}
	],
	
	/**
	 * Payment methods
	 */
	PAYMENT_METHODS:[
		{name:"Payment on branch", price:0},		
		{name:"Cash on delivery", price:40},
		{name:"Payment in advance", price:0}			
	],
	
	/**
	 * Symbols for the currency before the number
	 * @constant
	 * @type {string}
	 */	
	CURRENCY_BEFORE:"$",
	
	/**
	 * Symbols for the currency after the number
	 * @constant
	 * @type {string}
	 */
	CURRENCY_AFTER:"",	
	
	/**
	 * Cart headline
	 * @constant
	 * @type {string}
	 */
	CART_HEADLINE:"Shopping cart",
		
	/**
	 * Cart remove button
	 * @constant
	 * @type {string}
	 */
	CART_REMOVE_BUTTON:"Remove",
	
	/**
	 * Product title column name
	 * @constant
	 * @type {string}
	 */
	PRODUCT_TITLE_COLUMNT_NAME:"Product",
	
	/**
	 * Product details column name
	 * @constant
	 * @type {string}
	 */
	PRODUCT_DETAILS_COLUMNT_NAME:"Details",
	
	/**
	 * Product price column name
	 * @constant
	 * @type {string}
	 */
	PRODUCT_PRICE_COLUMNT_NAME:"Price",
	
	/**
	 * Product count column name
	 * @constant
	 * @type {string}
	 */
	PRODUCT_COUNT_COLUMNT_NAME:"Count",
	
	/**
	 * Product sub-total column name
	 * @constant
	 * @type {string}
	 */
	PRODUCT_SUBTOTAL_COLUMNT_NAME:"Sub-Total",
	
	/**
	 * Product empty message
	 * @constant
	 * @type {string}
	 */
	PRODUCT_EMPTY_MESSAGE:"There are not products yet.",
	
	/**
	 * Postage
	 * @constant
	 * @type {string}
	 */
	POSTAGE:"Postage",
	
	/**
	 * Total price
	 * @constant
	 * @type {string}
	 */
	TOTAL_PRICE:"Total price",
	
	/**
	 * Summary headline
	 * @constant
	 * @type {string}
	 */
	SUMMARY_HEADLINE:"Summary",	
	
	/**
	 * Payment headline
	 * @constant
	 * @type {string}
	 */
	PAYMENT_HEADLINE:"Payment method",
	
	/**
	 * Postages headline
	 * @constant
	 * @type {string}
	 */
	POSTAGES_HEADLINE:"Postages",
	
	/**
	 * Delivery address
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_HEADLINE: "Delivery address",
	
	/**
	 * Delivery full name
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_FULL_NAME: "Full Name",
	
	/**
	 * Delivery full name
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_ADDRESS_LINE: "Address Line",
	
	/**
	 * Delivery full name
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_CITY: "City",
	
	/**
	 * Zip
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_ZIP: "Zip / Postal Code",	
	
	/**
	 * Email
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_EMAIL: "E-mail",
	
	/**
	 * Phone
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_PHONE: "Phone number",		
};


// ### Source: project/src/messages/cs.js
ESHOP_JS.messages.cs = {
	
	/**
	 * Type of postages
	 */
	POSTAGES:[				
		{name: "Česká pošta", price: 80},
		{name: "Osobní převzetí", price: 0}
	],
	
	/**
	 * Payment methods
	 */
	PAYMENT_METHODS:[			
		{name:"Dobírka", price:40},
		{name:"Hotovost", price:0},					
	],
	
	/**
	 * Symbols for the currency before the number
	 * @constant
	 * @type {string}
	 */	
	CURRENCY_BEFORE:"",
	
	/**
	 * Symbols for the currency after the number
	 * @constant
	 * @type {string}
	 */
	CURRENCY_AFTER:"Kč",	
	
	/**
	 * Cart headline
	 * @constant
	 * @type {string}
	 */
	CART_HEADLINE:"Nákupní košík",
		
	/**
	 * Cart remove button
	 * @constant
	 * @type {string}
	 */
	CART_REMOVE_BUTTON:"Odstranit",
	
	/**
	 * Product title column name
	 * @constant
	 * @type {string}
	 */
	PRODUCT_TITLE_COLUMNT_NAME:"Produkt",
	
	/**
	 * Product details column name
	 * @constant
	 * @type {string}
	 */
	PRODUCT_DETAILS_COLUMNT_NAME:"Detail",
	
	/**
	 * Product price column name
	 * @constant
	 * @type {string}
	 */
	PRODUCT_PRICE_COLUMNT_NAME:"Cena",
	
	/**
	 * Product count column name
	 * @constant
	 * @type {string}
	 */
	PRODUCT_COUNT_COLUMNT_NAME:"Počet",
	
	/**
	 * Product sub-total column name
	 * @constant
	 * @type {string}
	 */
	PRODUCT_SUBTOTAL_COLUMNT_NAME:"Mezi součet",
	
	/**
	 * Product empty message
	 * @constant
	 * @type {string}
	 */
	PRODUCT_EMPTY_MESSAGE:"Zatím žádný produkt.",
	
	/**
	 * Postage
	 * @constant
	 * @type {string}
	 */
	POSTAGE:"Poštovné",
	
	/**
	 * Total price
	 * @constant
	 * @type {string}
	 */
	TOTAL_PRICE:"Celková cena",
	
	/**
	 * Summary headline
	 * @constant
	 * @type {string}
	 */
	SUMMARY_HEADLINE:"Přehled",	
	
	/**
	 * Payment headline
	 * @constant
	 * @type {string}
	 */
	PAYMENT_HEADLINE:"Způsob platby",
	
	/**
	 * Postages headline
	 * @constant
	 * @type {string}
	 */
	POSTAGES_HEADLINE:"Způsob doručení",
	
	/**
	 * Delivery address
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_HEADLINE: "Doručovací adresa",
	
	/**
	 * Delivery full name
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_FULL_NAME: "Jméno a příjmení",
	
	/**
	 * Delivery full name
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_ADDRESS_LINE: "Adresa",
	
	/**
	 * Delivery full name
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_CITY: "Město",
	
	/**
	 * Zip
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_ZIP: "PSČ",	
	
	/**
	 * Email
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_EMAIL: "E-mail",
	
	/**
	 * Phone
	 * @constant
	 * @type {string}
	 */
	DELIVERY_ADDRESS_PHONE: "Telefoní číslo",		
};


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
	PRODUCT_LINK_DOM_CLASS: "product-add-to-cart",
	
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
	 * DOM wrapper for checkout
	 * @constant
	 * @type {string}
	 */
	CHECKOUT_DOM_ID: "checkout",
	
	/**
	 * DOM wrapper for summary table
	 * @constant
	 * @type {string}
	 */
	SUMMARY_DOM_ID: "summary",
	
	/**
	 * DOM wrapper for count of products in shopping cart
	 * @constant
	 * @type {string}
	 */
	COUNT_OF_PRODUCTS_DOM_CLASS: "cart-products-count",

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
	CART_CHANGE_EVENT_NAME: "cartchange",
	
	/**
	 * Checkout change event name
	 * @constant
	 * @type {string}
	 */
	CHECKOUT_CHANGE_EVENT_NAME: "checkoutchange",
		
	/**
	 * DOM wrapper for postage methods
	 * @constant
	 * @type {string}
	 */
	POSTAGES_WRAPPER_DOM_CLASS: "postages",	
	
	/**
	 * DOM wrapper for payment method
	 * @constant
	 * @type {string}
	 */
	PAYMENTS_WRAPPER_DOM_CLASS: "payments",	
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
  "cart": "<table class=\"table table-striped table-bordered\"><caption><%=ESHOP_JS.settings.messages.CART_HEADLINE%></caption><thead><tr><th><%=ESHOP_JS.settings.messages.PRODUCT_TITLE_COLUMNT_NAME%></th><th><%=ESHOP_JS.settings.messages.PRODUCT_DETAILS_COLUMNT_NAME%></th><th><%=ESHOP_JS.settings.messages.PRODUCT_PRICE_COLUMNT_NAME%></th><th><%=ESHOP_JS.settings.messages.PRODUCT_COUNT_COLUMNT_NAME%></th><th><%=ESHOP_JS.settings.messages.PRODUCT_SUBTOTAL_COLUMNT_NAME%></th><th>&nbsp;</th></tr></thead><tbody><% if( products.length === 0){%><tr><td colspan=\"6\"><%=ESHOP_JS.settings.messages.PRODUCT_EMPTY_MESSAGE%></td></tr><% } %><% for (var idx = 0, len = products.length; idx < len; idx ++) { %><tr><td><%= products[idx].title %></td><td><%= products[idx].variations %></td><td><%=ESHOP_JS.settings.messages.CURRENCY_BEFORE%><%= products[idx].price %><%=ESHOP_JS.settings.messages.CURRENCY_AFTER%></td><td><input type=\"number\" value=\"<%= products[idx].count %>\" min=\"1\" max=\"100\" step=\"1\" data-idx=\"<%=idx%>\"></td><td><%=ESHOP_JS.settings.messages.CURRENCY_BEFORE%><%= products[idx].count * products[idx].price %><%=ESHOP_JS.settings.messages.CURRENCY_AFTER%></td><td><a href=\"#cart\" class=\"btn btn-danger btn-xs btn-remove\" title=\"<%=ESHOP_JS.settings.messages.CART_REMOVE_BUTTON%>\" data-idx=\"<%=idx%>\"><span class=\"glyphicon glyphicon-trash\"></span> <%=ESHOP_JS.settings.messages.CART_REMOVE_BUTTON%></a></td></tr><% } %><tfoot><tr class=\"info\"><th colspan=\"4\"><%=ESHOP_JS.settings.messages.PRODUCT_SUBTOTAL_COLUMNT_NAME%></th><td colspan=\"2\"><%=ESHOP_JS.settings.messages.CURRENCY_BEFORE%><%=ESHOP_JS.modules.cart.totalPrice()%><%=ESHOP_JS.settings.messages.CURRENCY_AFTER%></td></tr></tfoot></tbody></table>",
  "checkout": "<!-- Wrapper for summary table --><div id=\"summary\"></div><fieldset class=\"postages\">  <legend><%=ESHOP_JS.settings.messages.POSTAGES_HEADLINE%></legend>        <% for(var idx = 0, len = settings.messages.POSTAGES.length; idx < len; idx++){%>  <div class=\"radio\">  <label>      <input type=\"radio\" name=\"postage\" value=\"<%=settings.messages.POSTAGES[idx].name%>\" data-price=\"<%=settings.messages.POSTAGES[idx].price%>\" <%=idx === 0 ? 'checked' : ''%>>    <%=settings.messages.POSTAGES[idx].name%>      </label></div><%}%></fieldset><fieldset class=\"payments\">  <legend><%=ESHOP_JS.settings.messages.PAYMENT_HEADLINE%></legend>        <% for(var idx = 0, len = settings.messages.PAYMENT_METHODS.length; idx < len; idx++){%>  <div class=\"radio\">  <label>    <input type=\"radio\" name=\"payment\" value=\"<%=settings.messages.PAYMENT_METHODS[idx].name%>\" data-price=\"<%=settings.messages.PAYMENT_METHODS[idx].price%>\" <%=idx === 0 ? 'checked' : ''%>>    <%=settings.messages.PAYMENT_METHODS[idx].name%>      </label></div><%}%></fieldset>  <fieldset class=\"address\">  <legend><%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_HEADLINE%></legend>    <div class=\"form-group\">    <label for=\"fullname\"><%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_FULL_NAME%></label>    <input name=\"fullname\" type=\"text\" class=\"form-control\" placeholder=\"<%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_FULL_NAME%>\" required>  </div>    <div class=\"form-group\">    <label for=\"street\"><%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_ADDRESS_LINE%></label>    <input name=\"street\" type=\"text\" class=\"form-control\" placeholder=\"<%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_ADDRESS_LINE%>\" required>  </div>    <div class=\"form-group\">    <label for=\"city\"><%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_CITY%></label>    <input name=\"city\" type=\"text\" class=\"form-control\" placeholder=\"<%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_CITY%>\" required>  </div>    <div class=\"form-group\">    <label for=\"zip\"><%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_ZIP%></label>    <input name=\"zip\" type=\"text\" class=\"form-control\" placeholder=\"<%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_ZIP%>\" required>  </div>    <div class=\"form-group\">    <label for=\"email\"><%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_EMAIL%></label>    <input name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"<%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_EMAIL%>\" required>  </div>    <div class=\"form-group\">    <label for=\"phone\"><%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_PHONE%></label>    <input name=\"phone\" type=\"tel\" class=\"form-control\" placeholder=\"<%=ESHOP_JS.settings.messages.DELIVERY_ADDRESS_PHONE%>\" required>  </div> </fieldset>    ",
  "summary": "<table class=\"table table-striped table-bordered\"><caption><%=ESHOP_JS.settings.messages.SUMMARY_HEADLINE%></caption> <thead>  <tr><th><%=ESHOP_JS.settings.messages.PRODUCT_TITLE_COLUMNT_NAME%></th><th><%=ESHOP_JS.settings.messages.PRODUCT_DETAILS_COLUMNT_NAME%></th><th><%=ESHOP_JS.settings.messages.PRODUCT_PRICE_COLUMNT_NAME%></th><th><%=ESHOP_JS.settings.messages.PRODUCT_COUNT_COLUMNT_NAME%></th><th><%=ESHOP_JS.settings.messages.PRODUCT_SUBTOTAL_COLUMNT_NAME%></th></tr></thead><tbody><% if( products.length === 0){%><tr><td colspan=\"5\"><%=ESHOP_JS.settings.messages.PRODUCT_EMPTY_MESSAGE%></td></tr><% } %><% for (var idx = 0, len = products.length; idx < len; idx ++) { %><tr><td><%= products[idx].title %></td><td><%= products[idx].variations %></td><td><%=ESHOP_JS.settings.messages.CURRENCY_BEFORE%><%= products[idx].price %><%=ESHOP_JS.settings.messages.CURRENCY_AFTER%></td><td><%= products[idx].count %></td><td><%=ESHOP_JS.settings.messages.CURRENCY_BEFORE%><%= products[idx].count * products[idx].price %><%=ESHOP_JS.settings.messages.CURRENCY_AFTER%></td></tr><% } %><tfoot><tr><th colspan=\"4\"><%=ESHOP_JS.settings.messages.PRODUCT_SUBTOTAL_COLUMNT_NAME%></th><td colspan=\"1\"><%=ESHOP_JS.settings.messages.CURRENCY_BEFORE%><%=summary.subTotal%><%=ESHOP_JS.settings.messages.CURRENCY_AFTER%></td></tr><tr><th colspan=\"4\"><%=ESHOP_JS.settings.messages.POSTAGE%></th><td colspan=\"1\"><%=ESHOP_JS.settings.messages.CURRENCY_BEFORE%><%=summary.totalPostagePrice%><%=ESHOP_JS.settings.messages.CURRENCY_AFTER%></td></tr><tr class=\"info\"><th colspan=\"4\"><%=ESHOP_JS.settings.messages.TOTAL_PRICE%></th><td colspan=\"1\"><b><%=ESHOP_JS.settings.messages.CURRENCY_BEFORE%><%=summary.totalPrice%><%=ESHOP_JS.settings.messages.CURRENCY_AFTER%></b></td></tr></tfoot></tbody> </table><input type=\"hidden\" name=\"cart\" value=\"<%=ESHOP_JS.modules.cart.toString()%>\" >"
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
	}
	
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
	}
	
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
				products[ counter.dataset.idx ].count = counter.value >= 1 ? counter.value : 1;
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
	
	/**
	 * Refresh count of products
	 * @param{Array} counters - DOM wrappers
	 */
	function refreshCounters( counters ){								
		var count = getCountOfProducts();
		for(var idx = 0, len = counters.length; idx < len; idx++ ){		
			counters[idx].innerHTML = count;
		}	
	}
	
	/**
	 * Get count of products in cart
	 * @return {Number}
	 */
	function getCountOfProducts(){
		var count = 0;
		var products = storage.get( settings.CART_STORAGE_KEY ).products;
		for(var idx = 0, len = products.length; idx < len; idx++ ){				
			count += parseInt(products[idx].count, 10);
		}
		 
		return count;
	}
	
	/**
	 * Get total price
	 * @return {Number}
	 */
	function getTotalPrice(){
		var total = 0;
		var products = storage.get( settings.CART_STORAGE_KEY ).products;
		for(var idx = 0, len = products.length; idx < len; idx++ ){									
			total += parseInt(products[idx].count, 10) * parseInt(products[idx].price, 10); 
		}
		 
		return total;		
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
		 * Get count of products in shopping cart
		 * @return {Number}
		 */
		count:function(){
			return getCountOfProducts();	
		},
		
		/**
		 * Get total price products in shopping cart
		 * @return {Number}
		 */
		totalPrice:function(){
			return getTotalPrice();	
		},
							
		/**
		 * Redraw the shopping cart
		 */
		refresh:function(){
			
			refreshCounters( document.querySelectorAll("." + settings.COUNT_OF_PRODUCTS_DOM_CLASS));
			
			var wrapper = document.getElementById( settings.CART_DOM_ID );
			if(!wrapper){
				return;
			}			
			
			var cartObj = storage.get( settings.CART_STORAGE_KEY );
			cartObj.settings = ESHOP_JS.settings;
			wrapper.innerHTML = cartTemplate( cartObj );	
			
			setChangeCountHandler( wrapper );
			setRemoveProductHandler( wrapper );			
		},
		
		/**
		 * Convert the cart to string representation
		 */
		toString:function(){
			return JSON.stringify(storage.get( settings.CART_STORAGE_KEY ));		
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
	}
	
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
	}
	
	/**
	 * Get text from selected variations
	 * @param {Object} productDOMWrapper
	 * @return {String}
	 */
	function getVariationsText( productDOMWrapper ){
		return getVariations( productDOMWrapper ).texts.join(", ");
	}
	
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
	}
	
	/**
	 * Set add to cart handler
	 */		
	function addToCartHandler( productDOMWrapper ){
		var links = productDOMWrapper.querySelectorAll("." + settings.PRODUCT_LINK_DOM_CLASS);
		for(var idx = 0, len = links.length; idx < len; idx++ ){
			links[idx].addEventListener( utils.isTouchDevice( ) ? "touchstart" : "mousedown", function(e){				
				var productDOMWrapper = ESHOP_JS.utils.findParentByClass( e.target, ESHOP_JS.settings.PRODUCT_DOM_CLASS );							
				ESHOP_JS.modules.cart.add( ESHOP_JS.modules.product.getData( productDOMWrapper ));
				e.preventDefault();	
			}, false );	
		}	
	}
	
	/**
	 * Set change variations handler
	 */	
	function changeVariationHandler( productDOMWrapper ){
		var variations = productDOMWrapper.querySelectorAll("." + settings.PRODUCT_VARIATIONS_DOM_CLASS);
		
		for(var idx = 0, len = variations.length; idx < len; idx++ ){
			
			if( variations[idx].tagName === "SELECT" ){
				variations[idx].addEventListener("change", function(e){									
					var productDOMWrapper = ESHOP_JS.utils.findParentByClass( e.target, ESHOP_JS.settings.PRODUCT_DOM_CLASS );
					ESHOP_JS.modules.product.refreshPrice( productDOMWrapper );																														
				}, false);
			}			
		}		
	}
			
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


// ### Source: project/src/modules/checkout.js
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


// ### Source: project/src/modules/summary.js
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


// ### Source: project/src/init.js
/**
 * Eshop initialization
 * @param {String=} lang
 */
ESHOP_JS.init = function( lang ){			
	ESHOP_JS.settings.messages = ESHOP_JS.messages[ lang || "en" ];	
	ESHOP_JS.modules.product.init();
	ESHOP_JS.modules.cart.init();
	ESHOP_JS.modules.checkout.init();
	ESHOP_JS.modules.summary.init();
};