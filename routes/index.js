var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Contacts' });
});

router.get('/api/contacts/list', function(req, res) {
  response = [{
    firstName : "Sanuj",
    lastName : "Bhatnagar",
    phone : 9764837329,
    email : "sanujb@gmail.com",
    status : "Active"
  },{firstName : "Sanuj",
      lastName : "Bhatnagar",
      phone : 9764837329,
      email : "sanujb@gmail.com",
      status : "Active"}];
  res.end(JSON.stringify(response));
});

module.exports = router;
