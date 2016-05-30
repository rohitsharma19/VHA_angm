(function() {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('vha')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


		$urlRouterProvider
			.otherwise('/dashboard');

		$mdThemingProvider.theme('default')
			.primaryPalette('blue')
			.accentPalette('red');

		$mdThemingProvider.theme('input')
			.primaryPalette('red')
			.accentPalette('blue');

		$mdThemingProvider.theme('custom')
			.primaryPalette('red')
			.accentPalette('blue');

	}

	//runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope, formlyConfig, formlyValidationMessages) {
		'use strict';
		console.log('AngularJS run() function...');

		/*** validations code start ***/
		formlyValidationMessages.messages.required = getRequiredMessage;

		function getRequiredMessage($viewValue, $modelValue, scope) {
			return scope.to.label + ' is required';
		};

		formlyValidationMessages.messages.pattern = function(viewValue, modelValue, scope) {
			return viewValue + ' is Invalid Input. (Expected Input Stream: ' + scope.to.patternMessage + ')';
		};

		formlyValidationMessages.messages.validations = function(viewValue, modelValue, scope) {
			return viewValue + ' is invalid';
		};
		/*** validations code end ***/

		formlyConfig.setType({
			name: 'test',
			templateUrl: 'test.html'
		});

		formlyConfig.setType({
			name: 'tabset',
			templateUrl: 'tabset.html'
		});

		formlyConfig.setType({
			name: 'progressTracker',
			templateUrl: 'progressTracker.html'
		});

		formlyConfig.setWrapper({
			name: 'card',
			template: [
				'<md-card>\
					<img ng-src="{{to.card.imagePath}}" class="md-card-image">\
					<md-card-title style="background:{{to.cardHeaderBackground}}; color:{{to.cardLabelColor}}">\
						<md-card-title-text>\
							<span class="md-display-1">{{to.cardLabel}}</span>\
						</md-card-title-text>\
					</md-card-title>\
					<md-card-content>\
						<formly-transclude></formly-transclude>\
					</md-card-content>\
					<md-card-actions layout="row" layout-align="left">\
					<md-button ng-repeat="action in to.cardActions" class={{action.class}} ng-click="">{{action.label}}</md-button>\
					</md-card-actions>\
				</md-card>'
			].join(' ')
		});


		formlyConfig.setWrapper({
			name: 'card2',
			template: [
				'<div class="layout-row">\
				<md-card class="">\
					<md-card-content>\
						<formly-transclude></formly-transclude>\
					</md-card-content>\
				</md-card>\
				<md-card class="">\
					<md-card-content>\
						<formly-transclude></formly-transclude>\
					</md-card-content>\
				</md-card>\
				</div>'
			].join(' ')
		});

		formlyConfig.setWrapper({
			name: 'card_noHeaderNoActions',
			template: [
				'<md-card style="{{to.style}}">\
					<md-card-content>\
						<formly-transclude></formly-transclude>\
					</md-card-content>\
				</md-card>'
			].join(' ')
		});

		formlyConfig.setWrapper({
			name: 'gridWrapper',
			template: [
				'<div layout="row" style="background:{{to.cardHeaderBackground}}; color:{{to.cardLabelColor}};">\
					<div flex="95">\
						<div  style="font-size:30px; padding: 14px;">{{to.cardLabel}}</div>\
					</div>\
					<div flex="5">\
						<md-button class="md-fab" ng-click=clicked("openCreate"+options.templateOptions.label)>\
							<md-icon>add</md-icon>\
						</md-button>\
					</div>\
				</div>\
				<formly-transclude></formly-transclude>\
				'
			].join(' ')
		});

		formlyConfig.setWrapper({
			name: 'gridWrapperNoAction',
			template: [
				'<div layout="row" style="background:{{to.cardHeaderBackground}}; color:{{to.cardLabelColor}};">\
					<div flex="75">\
						<div class="md-display-1" style="padding: 14px;">{{to.cardLabel}}</div>\
					</div>\
					<div flex="25">\
					<h2>Total : {{model.self.discountedPrice}}</h2>\
					</div>\
				</div>\
				<formly-transclude></formly-transclude>\
				'
			].join(' ')
		});

		formlyConfig.setWrapper({
			name: 'wrapper_tabset',
			template: [
				'<md-tabs md-dynamic-height>\
						<formly-transclude></formly-transclude>\
					</md-tabs>\
					'
			].join(' ')
		});

		formlyConfig.setWrapper({
			name: 'wrapper_tab',
			template: [
				'<md-tab active="{{to.active}}">\
							<md-tab-label>\
								{{to.title}}\
							</md-tab-label>\
							<md-tab-body>\
								<formly-transclude></formly-transclude>\
							</md-tab-body>\
						</md-tab>\
						'
			].join(' ')
		});

		formlyConfig.setWrapper({
			name: 'wrapper_div',
			template: [
				'<div style="{{to.div_style}}">\
						<formly-transclude></formly-transclude>\
				</div>'
			].join(' ')
		});

		// formlyConfig.setType({
		// 	name: 'card_tabset',
		// 	extends: 'tabset',
		// 	wrapper: ['card']
		// });

		// formlyConfig.setType({
		// 	name: 'card_progressTracker',
		// 	extends: 'progressTracker',
		// 	wrapper: ['card_noHeaderNoActions']
		// });

		formlyConfig.setType({
			name: 'list',
			template: '<div>\
				 <span style="color:red;text-align:center;"class="md-display-1">{{to.headline}}</span>\
				 <p>{{to.brief}}</p>\
		  <md-list>\
		    <md-list-item class=\"md-2-line\" ng-repeat=\"item in to.list\">\
		      <div class=\"md-list-item-text\">\
					<li>\
		      <p style="color:black;">{{item}}</p>\
					<br>\
		      </div>\
			  </md-list-item>\
			</md-list>\
		</div>\
		'
		});

		formlyConfig.setType({
			name: 'product_details',
			templateUrl: 'productSummary.html',
			wrapper: ['card_noHeaderNoActions']
		});

		formlyConfig.setType({
			name: 'checkBox',
			template: '<md-checkbox id="check" class={{to.class}}>\
			{{to.label}}\
			</md-checkbox>\
			'
		});

		formlyConfig.setType({
			name: 'agreement_Details',
			templateUrl: 'agreementDetails.html'
		});

		formlyConfig.setType({
			name: 'signature',
			templateUrl: 'signature.html',
			controller: function($scope) {
				$scope.clicked = function(functionName, functionParam) {

					var targetScope = $scope;
					while (!targetScope.vm) {
						targetScope = targetScope.$parent;
					}
					targetScope.vm[functionName](functionParam);
				};
			}
		});


		formlyConfig.setType({
			name: 'button',
			templateUrl: 'button.html',
			controller: function($scope) {
				$scope.clicked = function(functionName, functionParam) {
					var targetScope = $scope;
					while (!targetScope.vm) {
						targetScope = targetScope.$parent;
					}
					targetScope.vm[functionName](functionParam);
				};
			}
		});

		formlyConfig.setType({
			name: 'ui-grid',
			templateUrl: 'uiGrid.html',
			// wrapper: ['gridWrapper','card_noHeaderNoActions'],
			// wrapper: ['card_noHeaderNoActions'],
			controller: function($scope) {
				$scope.clicked = function(functionName, functionParam) {
					console.log('functionName :' + functionName);
					var targetScope = $scope;
					while (!targetScope.vm) {
						targetScope = targetScope.$parent;
					}
					targetScope.vm[functionName](functionParam);
				};
			}
		});

		// formlyConfig.setType({
		// 	name: 'ui-grid',
		// 	templateUrl: 'uiGrid.html',
		// 	wrapper: ['gridWrapperNoAction','card_noHeaderNoActions'],
		// 	controller: function($scope) {
		// 		$scope.clicked = function(functionName, functionParam) {
		// 			console.log('functionName :' + functionName);
		// 			var targetScope = $scope;
		// 			while (!targetScope.vm) {
		// 				targetScope = targetScope.$parent;
		// 			}
		// 			targetScope.vm[functionName](functionParam);
		// 		};
		// 	}
		// });

		formlyConfig.setType({
			name: 'itemsList',
			templateUrl: 'itemsList.html',
			controller: function($scope) {
				$scope.clicked = function(functionName, functionParam) {
					console.log('functionName :' + functionName);
					var targetScope = $scope;
					while (!targetScope.vm) {
						targetScope = targetScope.$parent;
					}
					targetScope.vm[functionName](functionParam);
				};
			}
		});

		formlyConfig.setType({
			name: 'itemDetail',
			templateUrl: 'itemDetail.html',
			controller: function($scope, $mdBottomSheet) {

				var targetScope = $scope;
				while (!targetScope.vm) {
					targetScope = targetScope.$parent;
				}

				$scope.clicked = function(functionName, functionParam) {
					console.log('functionName :' + functionName);
					targetScope.vm[functionName](functionParam);
				};

				$scope.showBottomSheet = function(functionName, type, functionParam) {
					$scope.alert = '';

					var parentElement = document.querySelector('#'+type);
					console.log("parentElement");
					console.log(parentElement);

					$mdBottomSheet.show({
						// template: '<md-bottom-sheet class="md-list md-has-header" ng-cloak><input type=number ><md-button>Add</md-button></md-bottom-sheet>',
						template: '<md-bottom-sheet ng-cloak>\
												<md-input-container style="margin-left:15%; margin-right:15%;" md-theme="">\
												<label> Quanity </label>\
													<input ng-model="item.quantity" type=number min=0 class="ng-pristine ng-valid md-input ng-touched" aria-disabled="false" aria-invalid="false" style="">\
												</md-input-container>\
												<md-button ng-click="addQuantity()" ng-disabled="!item.quantity" class="md-fab md-raised md-primary"> <md-icon aria-label="Add" class="md-secondary md-hue-3">done</md-icon> </md-button>\
											</md-bottom-sheet>',
						parent: parentElement,
						controller: function($scope, $mdBottomSheet) {
							$scope.item = functionParam;
							$scope.addQuantity = function() {
								targetScope.vm[functionName](functionParam);
								$mdBottomSheet.hide();
							}
						}
					}).then(function() {});
				};
			}
		});

		formlyConfig.setType({
			name: 'itemChips',
			templateUrl: 'itemChips.html',
			controller: function($scope) {
				$scope.clicked = function(functionName, functionParam) {
					console.log('functionName :' + functionName);
					var targetScope = $scope;
					while (!targetScope.vm) {
						targetScope = targetScope.$parent;
					}
					targetScope.vm[functionName](functionParam);
				};
			}
		});

		formlyConfig.setType({
			name: 'SummaryDialogBox',
			templateUrl: 'confirmationDialogueBox1.html'
		});


		// formlyConfig.setType({
		// 	name: 'summaryCard',
		// 	template: '<md-card class="layout-row layout-wrap" style="{{to.style}};">\
		// 								  <div  ng-repeat="label in to.fields" class="{{to.class}}" >\
		// 								 		<div class="layout-row layout-wrap">\
		// 										<div flex-45>{{label.title}}</div> : <div flex-45>{{model[options.templateOptions.objectType][label.key]}} </div></div>\
		// 										</div>\
		// 									</md-card>'
		// });

		// formlyConfig.setType({
		// 	name: 'contact_Card',
		// 	templateUrl: 'contact_Card.html'
		// });

		formlyConfig.setType({
			name: 'topHeaderDetails',
			template: '<md-card class="md-padding" style="{{to.style}};">\
									<md-content class="layout-row layout-wrap" style="{{to.style}};" >\
								  <div ng-repeat="label in to.fields" class="{{to.class}}" >\
								 		<div class="layout-row layout-wrap">\
										<div flex-45>{{label.title}}</div> : <div flex-45>{{model[label.type][label.key]}} </div></div>\
									</div>\
									<md-content>\
								</md-card>'
		});



	}

})();
