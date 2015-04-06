Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('feeds');}
});

Router.route('/', {name: 'feedsList'});
Router.route('feeds/:_id', {
	name: 'feedPage',
	data: function() { return Feeds.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'feedPage'});