(function() {
    'use strict';

    describe('controller: MainController', function() {
        beforeEach(module('firstMean'));

        var controller,
            scope;

        beforeEach(function() {
            inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                controller = $controller('MainController', {
                    $scope: scope
                });
            });
        });

        describe('A controller vm binding...', function() {
            it('Should set hello...', function() {
                var hello = controller.hello;
                expect(hello).toBe('Hello World');
            });
        });
    });
})();
