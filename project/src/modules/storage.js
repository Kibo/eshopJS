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