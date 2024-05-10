const uglify = require("grunt-contrib-uglify");

module.exports = function (grunt) {
  // 1. initiate the gruntInitConfig Obj

  grunt.initConfig({
    // Specify your task here

    uglify: {
      //Minify JavaScript files
      // it takes target object and then files object the key in files object is the destination and the values are the paths of input files
      target: {
        files: {
          //output file : source (can be multiple)
          "dest/js/main.min.js": /*["src/js/input1.js"] */ ["src/js/*.js"],
        },
      },
    },

    // css minification
    cssmin: {
      target: {
        files: [
          {
            expand : true, // this says that the paths are distributed
            cwd: "src/css", //current working directory
            src: ["*.css", "!*.min.css"], //first is for inclusion and the second is for the exclusion
            dest: "dest/css",
            ext: ".min.css",  //extension of output files
          },
        ],
      },
    },
  });

  // step 2 load the library and establish the connection between the task and the library
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.loadNpmTasks("grunt-contrib-cssmin");
  // step 3 setting up the task or default tasks
  grunt.registerTask("default", ["uglify", "cssmin"]);
};
