module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);

	sass: {
      	options: {
        	sourceMap: true
      	},
      	dist: {
        	files: {
          		'css/main.css': 'sass/main.sass'
        	}
      	}
    },

    imagemin: {
    	dynamic: {
        	files: [{
            	expand: true,
            	cwd: 'images/',
            	src: ['**/*.{png,jpg,gif}'],
            	dest: 'images/build/'
        	}]
    	}
	},

	watch: {
	    scripts: {
	        files: ['sass/*.sass'],
	        tasks: ['sass'],
	        options: {
	            spawn: false,
	        }
	    } 
	}
}

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.registerTask('default', ['sass', 'imagemin']);
