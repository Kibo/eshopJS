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
				var productDOMWrapper = e.target.parentNode;				
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
					ESHOP_JS.modules.product.refreshPrice( e.target.parentNode );																									 
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
