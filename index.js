var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var list = require('./emails.js')
var cors = require('cors')

app.use(cors()); // enable all cors requests
app.use(bodyParser.json()); // for parsing application/json

function emailExists(email) {
    return (list.indexOf(email) > -1);
}

app.get('/users/:email', function (req, res) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log("GET request to", fullUrl)

    var email = req.params.email
    res.type('application/json');

    if (!emailExists(email)){
        res.status(404).send(
        {
            errors: [
              {
                status: "404",
                title:  "Not Found",
                detail: "User does not exist in the database"
              }
            ]
        });
    } else {
        // find the user from databse and send it according to json api
        res.status(200).send(
            {
                data: {
                    type: "user",
                    id: "haridu.naveen@gmail.com",
                    attributes: {
                        first_name: "Haridu",
                        last_name: "Senadeera",
                        email: "haridu.naveen@gmail.com",
                        organization: "NU",
                        group: "Bio Infomatics Lab",
                        address : {first: "4563 N Michicagn Ave", second: ""},
                        city: "Chicago",
                        state: "IL",
                        zip: "60625",
                        country: "USA",
                        phone: "312-503-8367"
                    }
                },
                links: {self: "/users/haridu.naveen@gmail.com"}
            }
        )

    }
})

app.post('/users', function (req, res) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log("POST request to", fullUrl)

    res.type('application/json');
    var attributes = req.body.data.attributes;
    var email = attributes.email;
    var location = "/users/"+email
    res.status(201).send(
        {
          data: {
              type: "user",
              id: email,
              attributes: attributes,
              links: {
                  self: location
              }
          }
        }
    );
});

app.patch('/users/:email', function (req, res){
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log("PATCH request to", fullUrl)

    res.type('application/json');
    var attributes = req.body.data.attributes;
    var email = attributes.email;
    var location = "/users/"+email

    //update the database and send back the new info
    res.status(200).send(
        {
          data: {
              type: "user",
              id: email,
              attributes: attributes,
              links: {
                  self: location
              }
          }
        }
    );
})

app.post('/orders', function (req, res) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log("POST request to", fullUrl)

    res.type('application/json');
    res.status(201).send(
        {
          data: {
              type: "order",
              id: '25',
              attributes: {
                  created: 'May 18, 2016'
              }
          }
        }
    );
});

app.listen(8080, function () {
  console.log('DSC Orders Server running on port 8080');
});