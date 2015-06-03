require.config({

	paths: {
		"jquery": "libs/jquery-2.1.4.min",
		"underscore": "libs/underscore",
		"backbone": "libs/backbone",
		"bootstrap": "libs/bootstrap.min",
		"QUnit": "libs/qunit-1.18.0"
	},

	shim: {
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps: [
				"underscore",
				"jquery"
			],
			exports: "Backbone"
		},
		"bootstrap": {
			deps: [
				"jquery"
			]
		},
		"QUnit": {
			exports: "QUnit",
			init: function() {
				QUnit.config.autoload = false;
				QUnit.config.autostart = false;
			}
		}
	}

});

require([
	"QUnit",
	"tests/utilsTest"
], function (QUnit, utilsTest) {
	'use strict';

	utilsTest.run();
	QUnit.load();
	QUnit.start();

});