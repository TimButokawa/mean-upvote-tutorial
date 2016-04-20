(function() {
    'use strict';

    angular
        .module('firstMean')
        .controller('PostController', PostController);

    function PostController($stateParams,
                            posts) {
        var vm = this;
        vm.post = posts[$stateParams.id];
        vm.submitForm = submitForm;
        vm.incrementedUpvotes = incrementedUpvotes;

        function submitForm(form) {
            if(form.$valid) {
                _addComment();
                form.$setPristine();
            }
        }

        function _addComment() {
            vm.post.comments.push({
                body: vm.body,
                author: 'user',
                upvotes: 0
            });
            vm.body = '';
        }

        function incrementedUpvotes(comment) {
            comment.upvotes += 1;
        }
    }
})();
