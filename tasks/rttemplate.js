/*
 * grunt-rt-template
 * https://github.com/maaprote/grunt-rt-template
 *
 * Copyright (c) 2017 Rodrigo Teixeira @ Okler Team
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function (grunt) {

	grunt.registerMultiTask('rttemplate', 'Generate HTML from template files.', function () {

  		var templateData = this.data.templateData;

		this.files.forEach(function (f) {
			console.log(f);
			var src = f.src.filter(function (filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function (filepath) {
				// Read file source.
				return grunt.file.read(grunt.template.process(filepath));
			}).join(grunt.util.linefeed);;

			grunt.file.write(f.dest, grunt.template.process(src, {
				data: { objData: templateData }
			}));

			// Print a success message.
			grunt.log.writeln('File "' + f.dest + '" created.');
		});

	});

};