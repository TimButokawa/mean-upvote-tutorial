(function() {
    'use strict';

    angular
        .module('firstMean')
        .controller('MainController', MainController);

    function MainController(postService) {
        var vm = this;
        vm.submitForm = submitForm;
        vm.incrementedUpvotes = incrementedUpvotes;
        vm.posts = postService.getPosts;

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
