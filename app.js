(function () {
    'use strict';
    
    angular.module('MsgsApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Maneki Neko";
        $scope.stateOfBeing = "luck";

        $scope.sayMessage = function () {
            return "Maneki Neko is giving you luck"
        };

        $scope.maneki =function () {
            $scope.stateOfBeing = "lucky";
        }
    }

}) ();