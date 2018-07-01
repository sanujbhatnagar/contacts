var fs = require("fs");
var contactModel = require("../../models/contactModel");

dataOps = {
    getSavedContacts : function(){
        var contents = JSON.parse(fs.readFileSync('./public/dataFiles/dataFile.json'));
        return contents;
    },
    addContact : function(obj){
        var id = parseInt(fs.readFileSync('./public/dataFiles/id.txt')) + 1;
        var contacts = JSON.parse(fs.readFileSync('./public/dataFiles/dataFile.json'));
        if(obj === undefined || obj == null ){
            //TODO: Use a JSON Schema Validator wrapped under a Method instead of the above
            return false;
        }
        obj.id = id;
        contacts.push(obj);
        try{
            fs.writeFileSync('./public/dataFiles/dataFile.json', JSON.stringify(contacts), 'utf8');
            fs.writeFileSync('./public/dataFiles/id.txt', id, 'utf8');
        }catch (e) {
            return false;
        }
        return true;
    },
    updateContact : function(contactObj){
        var contacts = JSON.parse(fs.readFileSync('./public/dataFiles/dataFile.json'));
        var contactToUpdate = contacts.find(searchContactById, contactObj);
        contactModel.updateContact(contactToUpdate, contactObj);
        try{
            fs.writeFileSync('./public/dataFiles/dataFile.json', JSON.stringify(contacts), 'utf8');
        }catch(e){
            return false;
        }
        return true;
    }
};
var searchContactById = function (contact){
    return this.id == contact.id;
};
module.exports = dataOps;
