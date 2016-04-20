(function() {
    'use strict';

    angular
        .module('firstMean')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: '$ctrl',
                resolve: {
                    posts: function(postService) {
                        return postService.getPosts();
                    }
                }
            })
            .state('home.posts', {
                url: '/posts/:id',
                views: {
                    '@': {
                        templateUrl: 'app/posts/post.html',
                        controller: 'PostController',
                        controllerAs: '$ctrl'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/home');
    }

})();
