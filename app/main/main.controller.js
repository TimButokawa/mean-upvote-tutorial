(function() {
    'use strict';

    angular
        .module('firstMean')
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;

        activate();

        function activate() {
            vm.hello = 'Hello World';
        }
    }
})();
