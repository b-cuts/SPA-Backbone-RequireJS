define([
	"app/views/app",
	"app/routers/router",
	"app/models/app",
	"app/collections/days"
], function (AppView, Router, AppModel, DaysCollection) {
	
	'use strict';

	var initialize = function() {
		var appModel = new AppModel();

		var appView = new AppView({model: appModel});
		$('body').append(appView.render().el);

		var router = new Router(appView);
		Backbone.history.start();

		var daysCollection = new DaysCollection([]);

		daysCollection.url = 'http://api.wunderground.com/api/5fc484a0b74ccb44/forecast/q/CA/San_Francisco.json';

		daysCollection.fetch({
			success: function(collection, response, options) {
				console.log(collection, response);
			}, 
			error: function(collection, response, options) {
				console.log('error');
			}
		});
	};

	return {
		initialize: initialize
	};

});