const { Router } = require("express");
const router = Router();
const fs = require("fs");
var users = require("../users.json");

router.post("/", (request, response) => {
  let exist = {};
  if(users.length){
    exist = users.find((user) => user.id === request.body.id);
  }
  if(exist && users.length){
    response.send("El usuario ya existe");
  } else {
    users.push(request.body);
    let newUserList = JSON.stringify(users);
    try {
      fs.writeFileSync("./src/users.json", newUserList);
      response.sendStatus(200);
    } catch(error) {
      console.error(error)
      response.sendStatus(500);
    }
  }
});

module.exports = router;