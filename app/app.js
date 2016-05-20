(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('vha', [
		'ngResource',
		'ngAria',
		'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'ui.grid',
		'formly',
		'formlyMaterial',
		'uiGmapgoogle-maps',
		'home',
		'lead',
		'opportunity',
		'recommendation',
		'quote',
		'agreement',
		'shared'
	]);

})();
