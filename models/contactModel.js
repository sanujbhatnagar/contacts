const properties = ["firstName", "lastName","phone","email","status"];
var contactsModel = {
    newContact : function (jsonObj) {
        var model = {};
        for (var i = 0; i < properties.length; i++) {
            if (!jsonObj.hasOwnProperty(properties[i])) {
                return null;
            }
        }
        if (jsonObj.hasOwnProperty("id")) {
            model.id = parseInt(jsonObj.id);
        }
        else {
            model.id = undefined;
        }
        model[properties[0]] = jsonObj[properties[0]];
        model[properties[1]] = jsonObj[properties[1]];
        model[properties[2]] = jsonObj[properties[2]];
        model[properties[3]] = jsonObj[properties[3]];
        model[properties[4]] = (jsonObj[properties[4]] == "true") ? "Active" : "Inactive";

        return model
    },
    /*
    * update `base` contact object with values from newValues contact object
    * param(@base) : contactObject whose values needs to be updated
    * param(@newValues) : contactObject with new values
    */
    updateContact : function(base, newValues){
        base[properties[0]] = newValues[properties[0]];
        base[properties[1]] = newValues[properties[1]];
        base[properties[2]] = newValues[properties[2]];
        base[properties[3]] = newValues[properties[3]];
        base[properties[4]] = newValues[properties[4]];
    }
};

module.exports = contactsModel;