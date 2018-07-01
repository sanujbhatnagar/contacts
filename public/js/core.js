var contacts = angular.module('contacts', ['ngRoute','contactsController', 'contactsService']);

contacts.constant("locStrings",{
    formCreateHeading : "Create contact",
    formEditDeleteHeading : "Edit/Delete Contact"
});
