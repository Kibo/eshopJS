/**
 * Products module
 */
ONE_PAGE_SHOP.modules.product = (function( window, document ){
	var settings = ONE_PAGE_SHOP.settings;
	var utils = ONE_PAGE_SHOP.utils;
	var cart = ONE_PAGE_SHOP.modules.cart;
			
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
