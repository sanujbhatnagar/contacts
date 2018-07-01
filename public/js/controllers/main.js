angular.module('contactsController', [])
    .controller("mainController",['$scope','$http','Contacts', 'locStrings',function($scope,$http,Contacts,locStrings){
        var $contactForm = angular.element("#createContactForm");
        var $listView = angular.element("#listContactView");
        var editMode = false;

        $scope.listContacts = function(){
            populateList();
        };

        $scope.toggleEdit = function (){
            editMode = !editMode;
            if(editMode){
                angular.element("#editMenuButton").addClass("editModeOn");
            }
            else{
                angular.element("#editMenuButton").removeClass("editModeOn");
            }
        };

        $scope.createContact = function() {
            $contactForm.find("#formHeading").text(locStrings.formCreateHeading);
            $contactForm.find("button[name=delete]").addClass("hidden");
            showContactForm();
        };

        $scope.editContact = function (){
            if(!editMode){
                return false;
            }
            fillForm(this.contact);
            $contactForm.find("#formHeading").text(locStrings.formEditDeleteHeading);
            $contactForm.find("button[name=delete]").removeClass("hidden");
            showContactForm();
        };

        $scope.saveContact = function(){
            contactJSONObj = pickContactDetails();
            if(validateFormDetails(contactJSONObj)) {
                Contacts.create(contactJSONObj).then(function (response) {
                    console.log(response);
                    populateList();
                });
                cleanForm();
            }
        };

        $scope.confDeleteContact = function(){

        };
        $scope.cancel = function(){
            showList();
            cleanForm();
        };

        var showList = function(){
            $contactForm.addClass("hidden");
            $listView.removeClass("hidden");
        };
        var showContactForm = function(){
            $listView.addClass("hidden");
            $contactForm.removeClass("hidden");
        };

        var pickContactDetails = function(){
            var contact = {};
            var id = $contactForm.find("input[type=hidden]").val();
            if(id !== "" ){
                contact.id = id;
            }
            contact.firstName = $contactForm.find("input#first").val();
            contact.lastName = $contactForm.find("input#last").val();
            contact.phone = $contactForm.find("input#phone").val();
            contact.email = $contactForm.find("input#email").val();
            contact.status = $contactForm.find("input[name=active]:checked").val();
            return contact;
        };
        var cleanForm = function(){
            $contactForm.find("input[type=hidden]").val("");
            $contactForm.find("input#first").val("");
            $contactForm.find("input#last").val("");
            $contactForm.find("input#phone").val("");
            $contactForm.find("input#email").val("");
            $contactForm.find("input[type=radio]:checked").prop('checked',false);
        };
        var fillForm = function(contact){
            cleanForm();
            $contactForm.find("input[type=hidden]").val(contact.id);
            $contactForm.find("input#first").val(contact.firstName);
            $contactForm.find("input#last").val(contact.lastName);
            $contactForm.find("input#phone").val(contact.phone);
            $contactForm.find("input#email").val(contact.email);
            if(contact.status === "Active"){
                $contactForm.find("input[type=radio][value=true]").prop('checked',true);
            }
            else{
                $contactForm.find("input[type=radio][value=false]").prop('checked',true);
            }
        };
        var validateFormDetails = function(obj){
            //TODO: Write a validator
            return true;
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
