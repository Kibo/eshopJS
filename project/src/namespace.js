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
