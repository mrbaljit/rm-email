module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		bowerInstall : {
            install : {}
        },		
		concat: {
				// concat task configuration goes here.
              emailjs : {
                src : [ 'src/*.js'],
                dest : 'dist/email.generated.js'
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
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build',  ['clean:dist', 'copy']);
	
    // concat step 'generates' the js to the dist folder
    grunt.registerTask('cleanBump', [ 'clean:dist', 'concat:emailjs', 'gitadd', 'bump' ]);
	
};