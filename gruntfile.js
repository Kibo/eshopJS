module.exports = function( grunt ) {
		
	grunt.initConfig( {			
		pkg: grunt.file.readJSON( 'package.json' ),
		
		srcFiles: ['project/src/namespace.js',
				   'project/src/utils.js',
				   'project/src/messages/en.js', 
				   'project/src/messages/cs.js',  
				   'project/src/settings.js', 
				   'project/src/modules/pubsub.js',
				   'project/src/templates/templates.js',				   
				   'project/src/modules/storage.js',
				   'project/src/modules/template-engine.js',
				   'project/src/modules/cart.js',				   
				   'project/src/modules/product.js',
				   'project/src/modules/checkout.js',
				   'project/src/modules/summary.js',
				   'project/src/init.js'
				   ],		
		concat : {
						
			options: {        	
        		stripBanners: true,
      			banner: '/* E-shop v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
       		 	process: function(src, filepath) {
          			return '\n// ### Source: ' + filepath + '\n' + src;
        		},
      		},
      		
      		dist: {
      			files: {
        			'project/build/<%= pkg.name %>.js': "<%= srcFiles %>",        			
        			'project/example/js/<%= pkg.name %>.js': "<%= srcFiles %>"
      			},
    		},      									
		},
		
		qunit : {
			files : ['project/test/*.html']
		},
			
		jshint: {			
			files: [ 'project/src/<%= pkg.name %>.js' ],
			options: {
				"-W099": true, // disable: Mixed spaces and tabs.
				"-W014": true, // disable: Bag line breaking
			}
		},
		
		uglify : {				
			dist : {
				files : {
					'project/build/<%= pkg.name %>.min.js' : ['project/build/<%= pkg.name %>.js']
				}
			}
		},

		'gh-pages': {
			options: {
				base: 'project/example'
			},
			src: [ '**' ]
		},
		
		jsttojs: {
    		root: 'project/src/templates',
    		output: 'project/src/templates/templates.js',
    		ext: 'ejs',
    		removebreak: true,
    		name: "ESHOP_JS.templates"  	    		  	   
  		},
  		
  		clean: {
  			build: ["project/src/templates/templates.js"],
		},  		  		  						   		  	   	  	
	});
	
	grunt.loadNpmTasks('grunt-contrib-qunit');		
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks('grunt-jsttojs');
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-clean');	
	grunt.loadNpmTasks( 'grunt-gh-pages' );

	grunt.registerTask( 'default', ['jshint', 'concat', 'nodeunit']);	
	grunt.registerTask( 'test', [ 'jsttojs', 'concat', 'qunit', 'clean']);
	grunt.registerTask( 'doc', ['gh-pages']);
	grunt.registerTask( 'build', ['jsttojs']);	
	grunt.registerTask( 'cleaner', ['clean']);		
};
