var module = angular.module('angular-mystars',[]);

module
    .directive('starRating', function() {
        'use strict';

        return {

            restrict: 'A',
            template: '<ul class="rating">' +
                '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                '\u2605' +
                '</li>' +
                '</ul>',
            scope: {
                ratingValue: '=',
                max: '=',
                onRatingSelected: '&'
            },
            link: function(scope, elem, attrs) {

                var updateStars = function() {
                    scope.stars = [];
                    for (var i = 1; i < (scope.max + 1); i++) {
                        console.info('valore di i ' + i);
                        scope.stars.push({
                            filled: i < (scope.ratingValue)
                        });
                    }
                };

                scope.toggle = function(index) {
                    console.info('index ' + index + 'scope ' + scope.ratingValue)
                    if (index == 0 && scope.ratingValue == 2) {
                        alert('Non puoi dare 0 stelle dopo aver votato la prima volta!');
                    } else {
                        scope.ratingValue = index + 2;
                        scope.onRatingSelected({
                            rating: index + 1
                        });
                    }
                };

                scope.$watch('ratingValue', function(oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }

        }

    })
    .controller('MyStarController', ["$scope", "$timeout", function($scope) {
        'use strict';
        $scope.rating = 0
        $scope.ratings = [{
            current: 1,
            max: 5
        }];

        $scope.getSelectedRating = function(rating) {
            console.log(rating);
        }



    }]);
