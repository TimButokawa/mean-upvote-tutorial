(function() {
    'use strict';

    describe('controller: PostController', function() {
        beforeEach(module('firstMean'));

        var controller,
            scope,
            postService;

        postService = {
            getPosts: function() {
                return [
                    {
                        title: 'foo',
                        upvotes: 0,
                        comments: []
                    },
                    {
                        title: 'bar',
                        upvotes: 2,
                        comments: []
                    }
                ];
            }
        };

        beforeEach(function() {
            inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                controller = $controller('PostController', {
                    $scope: scope,
                    $stateParams: { id: 1 },
                    posts: postService.getPosts()
                });
            });
        });

        describe('Getting a post...', function() {
            it('should get the post by state id...', function() {
                var title = controller.post.title;
                expect(title).toBe('bar');
                var upvotes = controller.post.upvotes;
                expect(upvotes).toBe(2);
            });
        });
    });
})();
