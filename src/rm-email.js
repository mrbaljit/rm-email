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