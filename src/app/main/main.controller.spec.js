(function() {
    'use strict';

    describe('controller: MainController', function() {
        beforeEach(module('firstMean'));

        var controller,
            scope,
            postService;

        beforeEach(function() {
            inject(function($rootScope, $controller, _postService_) {
                scope = $rootScope.$new();
                postService = _postService_;
                controller = $controller('MainController', {
                    $scope: scope,
                    posts: postService.getPosts()
                });
            });
        });

        describe('A controller vm binding...', function() {
            it('Should get posts from the service...', function() {
                var posts = controller.posts;
                expect(posts.length).toBe(0);
            });
        });
    });
})();
