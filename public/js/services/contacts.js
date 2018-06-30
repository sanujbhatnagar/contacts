angular.module('contactsService', [])

    .factory('Contacts', ['$http',function($http) {
        return {
            get : function() {
                return $http.get('/api/contacts/list');
            },
            create : function(todoData) {
                return $http.post('/api/contacts/create', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/contacts/delete' + id);
            }
        }
    }]);