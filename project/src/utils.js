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



	