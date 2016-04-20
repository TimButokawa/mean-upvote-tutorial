(function() {
    'use strict';

    angular
        .module('firstMean')
        .factory('postService', postService);

    function postService() {
        var service = {
            getPosts: []
        };

        return service;
    }
})();
