const express = require('express');
const User = require('./model/User')
const router = require('./router/userRouter')
const bodyparser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger-output.json');
const cors = require('cors');

const app = express();
const port = 3000;


// app.use(cors);

User.sync({force:false}).then(()=>{
    console.log("Database Connected.....");
    
    app.listen(port, ()=>{
        console.log("Server Connected....");
    })
}).catch((err) =>{
    console.log("Error: ",err);
})

app.use(bodyparser.json());
app.use('/', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
