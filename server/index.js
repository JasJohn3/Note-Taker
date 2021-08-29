require('dotenv').config();
const express = require('express');
const app = express();
PORT = process.env.PORT || 5001;
const password = process.env.MYSQL_PASSWORD;
const cors=require('cors');
app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});