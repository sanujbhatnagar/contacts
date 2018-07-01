angular.module('contactsController', [])
    .controller("mainController",['$scope','$http','Contacts',function($scope,$http,Contacts){
        var $contactForm = angular.element("#createContactForm");
        var $listView = angular.element("#listContactView");
        $scope.createContact = function() {
            showAddContactForm();
        };
        $scope.listContacts = function(){
            populateList();
        };
        $scope.saveContact = function(){
            contactJSONObj = pickContactDetails();
            Contacts.create(contactJSONObj).then(function(response){
                console.log(response);
                populateList();
            });
        };
        $scope.cancel = function(){
          showList();
        };
        var showList = function(){
            $contactForm.addClass("hidden");
            $listView.removeClass("hidden");
        };
        var showAddContactForm = function(){
            $listView.addClass("hidden");
            $contactForm.removeClass("hidden");
        };
        var pickContactDetails = function(){
            var contact = {};
            contact.firstName = $contactForm.find("input#first").val();
            contact.lastName = $contactForm.find("input#last").val();
            contact.phone = $contactForm.find("input#phone").val();
            contact.email = $contactForm.find("input#email").val();
            contact.status = $contactForm.find("input[name=active]:checked").val();
            return contact;
        };
        var populateList = function(){
            Contacts.get().then(function(response) {
                console.log(response);
                $scope.contacts=response.data;
                showList();
            });
        };
        populateList();
    }]);
