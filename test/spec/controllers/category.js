'use strict';

describe('Controller: CategoryCtrl', function() {

	// load the controller's module
	beforeEach(module('methodApp'));

	var CategoryCtrl;
	var scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		CategoryCtrl = $controller('CategoryCtrl', {
			$scope: scope
		});
	}));

	xit('should attach a list of awesomeThings to the scope', function() {
		expect(scope.awesomeThings.length).toBe('');
	});
});
