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
