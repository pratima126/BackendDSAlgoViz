const express = require("express");
const app = express();
const path = require("path");
const pug = require("pug");
const cors = require("cors");

// require(".db/conn");
// const Employee =  require("./models/register")
// require("./views");

var indexRoute=require("./routes/employee")
const AuthController = require("./models/Employee");
const Employee = require("./models/Employee");


const port =  process.env.PORT || 3000;

const static_path = path.join(__dirname, "../frontpage" )

app.use (cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use (express.static(static_path));
app.use('/',indexRoute);

// app.post("/register", async (req, res) => {
//   try{
//     const password =  req.body.password;
//     const cpassword = req.body.confirmpassword;

//     if(password === cpassword){
//       const registeruser = new Employee ({
//         name : req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
//         password: req.body.password,
//         confirmpassword: req.body.confirmpassword

//       })

//     }else{
//       res.send("password are not matching")
//     }

//   } catch (error){
//     res.status(400).send(error);
//   }
// })



app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'app', message: 'Hello World!' });
  });

  app.get('/', (req, res) => {
    res.render('loginpage', { title: 'app', message: 'Hello World!' });
  });

// app.get ("/register",async (req, res) => {
//    try{
//     console.log(req.body.name);
//     res.send(req.body.name)

//    }catch(error){
//     res.status(400).send(error);
//    }
// });

// app.post ("/register",(req, res) => {
//     res.render("register")
// });


// app.get("/", (req, res) => {
//     res.send("hello")
// });

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})