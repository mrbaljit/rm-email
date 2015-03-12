(function (global, angular) {
    'use strict';

    angular.module("rm.emailFormat", ["rm.email.tpls"])
        .controller('Controller', ['$scope', function($scope) {
            $scope.customer = {
                name: 'Naomi',
                address: '1600 Amphitheatreeee'
            };
        }])
        .directive('myCustomer', function() {
            return {
                restrict: 'E',
                scope: {
                    "name": "@",
                    "address": "=",
                    "age": "="
                },
                templateUrl: "src/my-customer.html"
            };
        })
        .directive('myCustomer1', function() {
            return {
                template: 'Name: {{customer.name}} Address: {{customer.address}}'
            };
        });
})(this, angular);
angular.module('rm.email.tpls', ['src/my-customer.html']);

angular.module("src/my-customer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/my-customer.html",
    "<h1>I am here...</h1>\n" +
    "Name: {{name}} Address: {{address}} Age : {{age}}");
}]);
