var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var list = require('./emails.js')
var cors = require('cors')
var strainList = require('./fake-data/strains.js')
var stockList = require('./fake-data/stocks.js')

app.use(cors()); // enable all cors requests
app.use(bodyParser.json()); // for parsing application/json

function emailExists(email) {
    return (list.indexOf(email) > -1);
}

app.get('/stocks/:id', function (req, res) {
  var id = req.params.id
  var stock = stockList.filter(function(stock) {
    return stock.id === id
  })[0];
  res.type('application/json');
  if (stock && !req.query.include) {
    var data = {
     "links": {
          "self": "/stocks/" + stock.id
     },
     "data": {
          "type": "stocks",
          "id": id,
          "attributes": {
              "name": stock.attributes.name,
              "description": stock.attributes.descriptor,
              "category": stock.type
          }
      }
    }
    res.status(200).send(data)
  } else if (req.query.include) {
    var data = {
     "links": {
          "self": "/stocks/DBS0236225"
     },
     "data": stock,
      included: [
        {
          // CHARACTERISTICS
          data: [
            {
               "type": "characteristics",
               "id": "14",
               "attributes": {
                   "value": "axenic"
               },
               "relationships": {
                   "publication": {
                        "links": {
                            "related": "/publications/573"
                        }
                   }
               }
            },
            {
               "type": "characteristic",
               "id": "19",
               "attributes": {
                   "value": "neomycin resistant"
               },
               "relationships": {
                   "publication": {
                        "links": {
                            "related": "/publications/573"
                        }
                   }
               }
            }
          ]
        },
        {
          // PHENOTYPES
            "links": {
                "self": "/phenotypes/DSC_PHEN0007441"
            },
            "data": [
              {
                  "type": "phenotypes",
                  "id": "DSC_PHEN0007441",
                  "attributes": {
                      "name": "D.discoideum unique phenotypes",
                      "observation": "abolished aggreation",
                      "phen_attribute": "decreased occurence",
                      "value": "For some reason very less aggreation",
                      "cvalue": "I do not know",
                      "evidence": "fruiting body development"
                  },
                  "relationships": {
                      "properties": {
                          "links": {
                              "related": "/phenotypes/DSC_PHEN0007441/properties"
                          }
                      }
                  }
              },
              {
                  "type": "phenotypes",
                  "id": "DSC_PHEN0007451",
                  "attributes": {
                      "name": "D.discoideum unique phenotypes",
                      "observation": "test info",
                      "phen_attribute": "decreased occurence",
                      "value": "This is a note",
                      "cvalue": "I do not know",
                      "evidence": "fruiting body development"
                  },
                  "relationships": {
                      "properties": {
                          "links": {
                              "related": "/phenotypes/DSC_PHEN0007441/properties"
                          }
                      }
                  }
              }
            ]
        },
        {
          // GENOTYPES
          "data": [
            {
                "type": "genotypes",
                "id": "DSC_G0122502",
                "attributes": {
                    "name": "axeA1,axeB1,axeC1,pB18-cAR1],neoR",
                    "description": "Important genotypes"
                },
                "relationships": {
                    "properties": {
                        "links": {
                            "related": "/genotypes/DSC_G0122502/properties"
                        }
                    }
                }
            }
          ]
        }
      ]
  }
    res.status(200).send(data)
  } else {
    res.status(404).send(
      {
        errors: [
          {
            status: "404",
            title:  "Not Found",
            detail: "The stock your are looking for does not exist."
          }
        ]
      }
    )
  }
})

app.get('/stocks', function (req, res) {
  var stocks = stockList
  if (req.query.filter) {
    var filter = req.query.filter
    if (filter) {
      for (var param in filter) {
        if (filter.hasOwnProperty(param)) {
          stocks = stocks.filter((stock) => {
            if (stock[param] === filter[param]) {
              return 1
            }
            return 0
          })
        }
      }
    }
    var page = +req.query.page.number
    var size = +req.query.page.size
    var totalPages = Math.ceil(stocks.length / size)
    var totalRecords = stocks.length
    res.type('application/json');
    var start = (page - 1) * size
    var end = (page === totalPages) && (totalRecords % size > 0) ? start + stocks.length % size : page * size
    var data = stocks.slice(start, end)
  } else {
    var page = +req.query.page.number
    var size = +req.query.page.size
    var totalRecords = stocks.length
    var totalPages = Math.ceil(stocks.length / size)
    res.type('application/json');
    var start = (page - 1) * size
    var end = (page === totalPages) && (totalRecords % size > 0) ? start + stocks.length % size : page * size
    var data = stocks.slice(start, end)
  }
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log("GET request to", fullUrl)
  console.log(req.query)
  // var strains = strains.slice((page - 1) * 10, (strains.length % 10 > 0) ? page * 10 : ((page - 1) * 10) + strains.length % 10)
  if (page <= totalPages || req.query.filter) {
    res.status(200).send(
      {
        data: data,
        links: {
          self: req.originalUrl,
          first: "/stocks?page[number]=1&page[size]=" + size,
          prev: page !== 1 ? "/stocks?page[number]=" + (page - 1) + "&page[size]=" + size : undefined,
          next: (page !== totalPages) && (!req.query.filter.hasOwnProperty('id')) ? "/stocks?page[number]=" + (page + 1) + "&page[size]=" + size : null,
          last: "/stocks?page[number]=" + totalPages + "&page[size]=" + size
        },
        meta: {
          pagination: {
            records: totalRecords,
            total: totalPages,
            size: data.length,
            number: page
          }
        }
      }
    )
  } else {
    res.status(404).send(
      {
        errors: [
          {
            status: "404",
            title:  "Not Found",
            detail: "The page your are looking for does not exist."
          }
        ]
      }
    )
  }
})

// app.get('/stocks', function (req, res) {
//   console.log(req.query.filter)
// })
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
