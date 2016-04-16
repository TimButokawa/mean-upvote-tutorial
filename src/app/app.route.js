(function() {
    'use strict';

    angular
        .module('firstMean')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: '$ctrl'
            })
        ;

        $urlRouterProvider.otherwise('/');
    }

})();
