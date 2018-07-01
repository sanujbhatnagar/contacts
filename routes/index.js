var express = require('express');
var router = express.Router();
var fs = require("fs");
var fileIO = require("../modules/dataHandling/FileOperations");
var contactModel = require("../models/contactModel");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Contacts' });
});

router.get('/api/contacts/list', function(req, res) {
  //TODO: File reading method will actually be either database connection object or some proper source.
  var response = fileIO.getSavedContacts();
  res.end(JSON.stringify(response));
});

router.get('/api/contacts/json', function(req, res) {
    //TODO: File reading method will actually be either database connection object or some proper source.
    var response = JSON.parse(fs.readFileSync('./public/dataFiles/dataFile.json', 'utf8'));
    res.end(JSON.stringify(response));
});

router.post("/api/contacts/create", function(req, res){
    var contact = contactModel(req.body);
    //TODO: Using Model will ensure we are sending correct data JSON model into our FileSystem
    if(contact !== null){
        if(fileIO.addContact(contact)){
            res.end("Added record");
            return;
        }
    }
    res.end("Contact not added");
});

module.exports = router;
