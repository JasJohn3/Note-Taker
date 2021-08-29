require('dotenv').config();
const express = require('express');
const app = express();
PORT = process.env.PORT || 5001;
console.log(process.env.PORT);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});