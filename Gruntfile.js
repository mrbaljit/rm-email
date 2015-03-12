module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var appConfig = {
        app: 'rm-email',
        dist: 'dist',
        src: 'src'
    };
    
    grunt.initConfig({
        appConfig: appConfig,
        pkg: grunt.file.readJSON('package.json'),
		
		bowerInstall : {
            install : {}
        },		
		concat: {
				// concat task configuration goes here.
              js : {
                src : [ '<%= appConfig.src %>/*.js', '<%= appConfig.dist %>/rm-email.tpls.js'],
                dest : '<%= appConfig.dist %>/rm-email.tpls.js'
            }				
		},
		 uglify: {
			// uglify task configuration goes here.
	   },
       clean: {
             // delete the packaged files in dist folder
            dist : {
                src : [ 'dist/*' ]
            }
       },
        html2js: {
            options: {
                base: '',
                module: 'rm.email.tpls'
            },
            main: {
                src: ['<%= appConfig.src %>/**/*.html'],
                dest: '<%= appConfig.dist %>/rm-email.tpls.js'
            }
        },
	   copy: {
			 main : {
				 files : [{
					expand : true,
                    src : 'src/*',
                    dest : 'dist/',
                    flatten : true,
                    filter : 'isFile'
					 
				 }]
			 }
	   },
       bump: {
            options : {
                files : [ 'package.json', 'bower.json' ],
                updateConfigs : [],
                commit : true,
                commitMessage : 'Release %VERSION%',
                commitFiles : [ 'package.json', 'bower.json', 'dist/*' ],
                createTag : true,
                tagName : '%VERSION%',
                tagMessage : 'Version %VERSION%',
                push : true,
                pushTo : ''
            }
        },
        gitadd: {
            task: {
                options: {
                    force: true
                },
                files: {
                    src: ['dist/*']
                }
            }
        }
    });

    //Custom defined tasks
    grunt.registerTask('default', ['compile']);
    //grunt.registerTask('build',  ['clean:dist', 'copy']);
	
    // concat step 'generates' the js to the dist folder
    grunt.registerTask('cleanBump', [ 'gitadd', 'bump' ]);

    grunt.registerTask('compile', [
        'clean',
        'html2js',
        'concat'
    ]);
	
};