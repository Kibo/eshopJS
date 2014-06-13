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