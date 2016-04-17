(function() {
    'use strict';

    angular
        .module('firstMean')
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        vm.addPost = addPost;
        vm.posts = [
            {
                title: 'post 1',
                upvotes: 1
            },
            {
                title: 'post 2',
                upvotes: 4
            },
            {
                title: 'post 3',
                upvotes: 5
            },
            {
                title: 'post 4',
                upvotes: 13
            },
            {
                title: 'post 5',
                upvotes: 10
            }
        ];

        function addPost() {
            vm.posts.push( { title: 'A new post!', upvotes: 0 });
        }
    }
})();
