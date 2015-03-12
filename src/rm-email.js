(function (global, angular) {
    'use strict';

    angular.module("rm.emailFormat", ["rm.email.tpls"])
        .controller('Controller', ['$scope', function($scope) {
            $scope.customer = {
                name: 'Naomi',
                address: '1600 Amphitheatreeee'
            };
        }])
        .directive("emailFormat", [function () {
            return function (scope, elm) {
                function formatEmail() {
                    elm.inputmask('Regex', {regex: "[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}"});
                };
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