define([
	"jquery",
	"underscore",
	"backbone",
	"app/views/about",
	"app/views/dash",
], function ($, _, Backbone, AboutView, DashView) {

	'use strict';

	var AppView = Backbone.View.extend({
		id: 'app-view',

		html: [
			'<div class="navbar">',
				'<a href="#" class="navbar-brand">Weather Watcher</a>',
				'<ul class="nav navbar-nav">',
					'<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
					'<li id="nav-about"><a href="#about">About</a></li>',
				'</ul>',
			'</div>',
			'<div id="content"></div>'
		].join(''),

		events: {
		},

		views: {},

		initialize: function() {

			this.views.about = new AboutView({
				id: 'page-about',
				className: 'page-view'
			});

			this.views.dash = new DashView({
				id: 'page-dash',
				className: 'page-view'
			});

			this.$el.append(this.html);

			this.$('#content').append(this.views.about.render().el);
			this.$('#content').append(this.views.dash.render().el);
		},

		setPage: function(page, param) {
			this.$('.nav li').removeClass('active');
			this.$('.page-view').hide();
			this.$('#page-' + page).show();
			this.$('#nav-' + page).addClass('active');
		}

	});
	
	return AppView;

});