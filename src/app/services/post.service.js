(function() {
    'use strict';

    angular
        .module('firstMean')
        .factory('postService', postService);

    function postService(Restangular) {
        var service = {
            getPosts: getPosts
        };

        return service;

        function getPosts() {
            return Restangular.one('posts').get().then(
                function Success(data) {
                    return data.plain();
                }, function Failure(data) {
                    return data.errors;
                }
            );
        }
    }
})();
