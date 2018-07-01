const properties = ["firstName", "lastName","phone","email","status"];
var contactsModel = function(jsonObj){
    var model = {};
    for(var i=0; i< properties.length; i++){
        if(!jsonObj.hasOwnProperty(properties[i])){
            return null;
        }
    }
    model[properties[0]] = jsonObj[properties[0]];
    model[properties[1]] = jsonObj[properties[1]];
    model[properties[2]] = jsonObj[properties[2]];
    model[properties[3]] = jsonObj[properties[3]];
    model[properties[4]] = jsonObj[properties[4]] ? "Active":"Inactive";

    return model
};

module.exports = contactsModel;