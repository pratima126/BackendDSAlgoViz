const Employee = require("../models/Employee");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { findOne } = require('../models/User')

// const express = require('express');
// const app = express();

// app.post('/api/login', (req, res) => {
//   const data = {
//     "username":"076bct020.isha@sagarmatha@edu.np",
//     "password":"isha123"

//    };
//   res.json(data);
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// app.use(bodyParser.json());

// // Connect to the MongoDB database
// mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

// // Define a schema for the data
// const myDataSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });
// const MyData = mongoose.model('MyData', myDataSchema);

// // Handle POST requests to add new data
// app.post('/data', (req, res) => {
//   const newData = new MyData(req.body);
//   newData.save((err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send(err);
//     } else {
//       res.json(data);
//     }
//   });
// });

// Start the server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

const register = (req, res, next) => {
    console.log(req.body);
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }

    let employee = new Employee({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
    });

    employee
      .save()
      .then((employee) => {
        res.json({
          message: "user added succesfully",
        });
      })
      .catch((employee) => {
        res.json({
          message: "an error occured",
        });
      });
  });
};

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  Employee.findOne({ $or: [{ email: username }, { phone: username }] }).then(
    (employee) => {
      if (employee) {
        bcrypt.compare(password, employee.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign({ name: employee.name }, "Azqw@qwe#", {
              expiresIn: "1h",
            });
            res.json({
              message: "login succesful",
              token,
            });
          } else {
            res.json({
              message: "password doesnot match",
            });
          }
        });
      } else {
        res.json({
          message: "no user found",
        });
      }
    }
  );
};

module.exports = {
  register,
  login,
};
