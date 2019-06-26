var express = require('express');
var app = express();


//Reusable controllers
var clientController=function (req, res) {
  console.log("CAlling rest api");
  var clients=[
             {client:1, clientName:"Adidas",softwares:10, status:"Half"},
             {client:2, clientName:"puma",softwares:20, status:"quarter"},
	         {client:3, clientName:"Audi",softwares:25,status:"full"}
      ];
  res.send(clients);
};

// setting router to map requests  with controllers

app.get('/clients',clientController );

  var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:3000", host, port)
})