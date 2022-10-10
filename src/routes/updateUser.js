const { Router } = require("express");
const router = Router();
const fs = require("fs");
var users = require("../users.json");

router.put("/", (request, response) => {
  let exist = {};
  if(users.length){
    exist = users.find((user) => user.id === request.body.id);
  }
  if(exist){
    const cloneUserList = users.filter(({ id }) => id !== request.body.id);
    cloneUserList.push(request.body);
    let newUserList = JSON.stringify(cloneUserList);
   try {
      fs.writeFileSync("./src/users.json", newUserList);
      response.sendStatus(200);
    } catch(error) {
      console.error(error)
      response.sendStatus(500);
    }
  } else {
   response.send("Usuario no encontrado");
  }
});

module.exports = router;