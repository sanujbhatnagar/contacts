angular.module('contactsController', [])
    .controller("mainController",['$scope','$http','Contacts',function($scope,$http,Contacts){
         Contacts.get().then(function(response) {
            console.log(response);
            $scope.contacts=response.data;
        });

    }]);
