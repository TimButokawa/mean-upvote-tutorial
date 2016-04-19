(function() {
    'use strict';

    angular
        .module('firstMean')
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        vm.submitForm = submitForm;
        vm.incrementedUpvotes = incrementedUpvotes;

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

        function submitForm(form) {
            if(form.$valid) {
                _addPost();
                form.$setPristine();
            }
        }

        function _addPost() {
            vm.posts.push({
                title: vm.title,
                link: vm.link,
                upvotes: 0
            });
            vm.title = '';
            vm.link = '';
        }

        function incrementedUpvotes(post) {
            post.upvotes += 1;
        }
    }
})();
