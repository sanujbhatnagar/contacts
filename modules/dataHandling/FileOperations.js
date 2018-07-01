var fs = require("fs");

dataOps = {
    getSavedContacts : function(){
        var contents = JSON.parse(fs.readFileSync('./public/dataFiles/dataFile.json'));
        return contents;
    },
    addContact : function(obj){
        var contacts = JSON.parse(fs.readFileSync('./public/dataFiles/dataFile.json'));
        if(obj === undefined || obj == null ){
            //TODO: Use a JSON Schema Validator wrapped under a Method instead of the above
            return false;
        }
        contacts.push(obj);
        try{
            fs.writeFileSync('./public/dataFiles/dataFile.json', JSON.stringify(contacts), 'utf8');
            return true;
        }catch (e) {
            return false;
        }
    }
};

module.exports = dataOps;