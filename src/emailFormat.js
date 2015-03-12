(function (global, angular) {
    'use strict';

    angular.module("rm.emailFormat", [])
        .directive("emailFormat", [function () {
            return function (scope, elm) {
                function formatEmail () {
                    elm.inputmask('Regex', {regex: "[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}"});
                };
            };
        }]);
})(this, angular);