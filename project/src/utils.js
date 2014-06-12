window.ONE_PAGE_SHOP.utils = (function( window, document){
		
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



	