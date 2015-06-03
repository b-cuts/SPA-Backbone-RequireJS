require.config({

	paths: {
		"jquery": "libs/jquery-2.1.4.min",
		"underscore": "libs/underscore",
		"backbone": "libs/backbone",
		"bootstrap": "libs/bootstrap.min"
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
		}
	}

});

require([
	"backbone",
	"app/app"
], function (Backbone, App) {
	'use strict';
	App.initialize();
});