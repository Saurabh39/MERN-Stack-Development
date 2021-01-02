var express = require("express");
var app = express();
var joi = require("joi");
app.use(express.json());

const Data =[
  {id:3 , Name: "saurabh" },
  { Work: "Programming" ,  },
  { City: "Banaglore" },
  { Experirnce: "Good" }
]

app.get("/", (req, res) => {
  res.send("<h1>Welcoe to MEAN Stack Programming</h1>");
});


//to get the complete data

app.get("/data", (req, res) => {
  res.send(Data);
});
 


//to get the specific item, we need id


app.get ("/params/:id" , (req,res)=>{

  const DataId=Data.find(c=>c.id===parseInt(req.params.id))
  if(!DataId) res.status(404).send ("Wrong Input/Wrong Id")
  
  res.send (DataId)


})


/*
//validating with joi

function validateData(Data) {
  const schema = {
    City: joi.string().min(3).required(),
    Name: joi.string().min(3).required(),
  };
}


*/

















port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});


