angular.module('contactsService', [])

    .factory('Contacts', ['$http',function($http) {
        return {
            get : function() {
                return $http.get('/api/contacts/list');
            },
            create : function(data) {
                return $http.post('/api/contacts/createUpdate', data);
            },
            delete : function(id) {
                return $http.delete('/api/contacts/delete' + id);
            }
        }
    }]);