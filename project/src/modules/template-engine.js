/**
 * Template engine module
 * 
 * @author Krasimir Tsonev
 * @see https://github.com/krasimir/absurd/blob/master/lib/processors/html/helpers/TemplateEngine.js
 * @see http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line
 * 
 * @param {String} html - template
 * @param {Object} options - data
 * @return {Object}
 */
ONE_PAGE_SHOP.modules.templateEngine = function( html, options ) {
	var re = /<%(.+?)%>/g, 
	reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g, 
	code = 'with(obj) { var r=[];\n', 
	cursor = 0, 
	result;
	
	var add = function( line, js ) {
		js ? ( code += line.match( reExp ) ? line + '\n' : 'r.push(' + line + ');\n' ) : ( code += line != '' ? 'r.push("' + line.replace( /"/g, '\\"' ) + '");\n' : '' );
		return add;
	};

	while( match = re.exec( html ) ) {
		add(html.slice(cursor, match.index))( match[ 1 ], true );
		cursor = match.index + match[ 0 ].length;
	}

	add( html.substr( cursor, html.length - cursor ) );
	code = ( code + 'return r.join(""); }' ).replace( /[\r\t\n]/g, '' );
	
	try {
		result = new Function( 'obj', code ).apply( options, [ options ] );
	} catch(err) {
		console.error( "'" + err.message + "'", " in \n\nCode:\n", code, "\n" );
	}
	
	return result;
};

