const express = require('express');
const app = express();
const cors = require('cors');
//settings
app.set('port', 3000);

// middlewares
app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//routes
app.use('/api/createUser', require('./routes/createUser'));
app.use('/api/listUsers', require('./routes/listUsers'));
app.use('/api/deleteUser', require('./routes/deleteUser'));
app.use('/api/updateUser', require('./routes/updateUser'));

//starting the server
app.listen(3000, () => {
    console.log(`Corriendo en puerto 3000`);
});
