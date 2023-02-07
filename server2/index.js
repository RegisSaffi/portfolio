const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");

const fetch = require('node-fetch');

const sgMail = require('@sendgrid/mail');

const app = express();
const apiPort = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//Calculator app
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("devices.json");
const db = low(adapter);
// db.defaults({ devices: [], info: {},notifications:{} }).write();

//default path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/calculator/devices", (req, res) => {
  
  var data = db.get("devices").value();
  res.status(200).send(data);

});

app.get("/calculator/device_info/:id", (req, res) => {
 
  var id=req.params.id;
  var data =db.get("info."+id).value();
  
  res.status(200).send(data==undefined?{}:data);
  
});

app.get("/calculator/notifications/:id", (req, res) => {
 
  var id=req.params.id;
  var data =db.get("notifications."+id).value();
  
  res.status(200).send(data==undefined?{}:data);
  
});

app.post("/calculator/add_data", (req, res) => {
  
  var data = req.body;
  var id=data.device.id;
  //check if device exists in db
  var device = db.get("devices").find({id:id}).value();
  if(device==undefined){
    db.get("devices").push(data.device).write();
  }

  db.get("info").set(id,data.info).write();
  var nots =db.get("notifications."+id).value()||[];
  nots.push(data.notification);

  db.get("notifications").set(id,nots).write();

  res.status(200).send({message:"Data added successfully"});

});

//create clear db endpoing
app.get("/calculator/clear", (req, res) => {
  db.setState({ devices: [], info: {},notifications:{} }).write();
  res.status(200).send({message:"Data cleared successfully"});
});


app.get("/api/quotes", async(req, res) => {
  
  try{
 var q=await getQuotes()
 res.status(200)
 res.status(200).json(q)

  }catch(e){
    
    res.status(500).json([])
   
  }

});

app.post("/api/query", (req, res) => {

  if(req.body.email==null){
    res.status(401).send({"message":"Input your email please"})
  }

  const msg={
    from:{
        name:"Regis client",
       email:"regis@ticqet.rw"
    },
    personalizations:[
       {
          to:[
             {
                name:"Buddy",
                email:"regissaffi@gmail.com"
             },
          ],
          preheader:"HELLO",
          dynamic_template_data:{
            subject:"New query from a client",
            title:"Greetings",
            name:"Hey Regis",
            message:"My email is <"+req.body.email+">   "+req.body.message
            }
       }
    ],
    template_id:"d-a4c034740ce34cb59b52e1b3efff874a",
 }

 sendEmail(msg)
 res.status(200).send({"message":"Query sent successfully,I will get back to you!"})

});

function sendEmail(data) {

  sgMail.setApiKey("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")
  
  return sgMail
    .send(data)
    .then(() => {

      console.log('Normal email sent')
      return null

    })
    .catch((error) => {

      console.log("Normal email is not sent")
      console.error(error)

    })
  
  }

function getQuotes(){

  return new Promise((resolve,reject)=>{

    fetch("http://quotes.stormconsultancy.co.uk/quotes.json")
    .then(res => res.json())
    .then(
      (result) => {
       resolve(result)
      },
      (error) => {
        reject(error)
      })

  })
}

//Handle browser paths
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
//   });

/////////////

  app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
  