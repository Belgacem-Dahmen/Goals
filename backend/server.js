const express = require('express');
const dotenv = require('dotenv');
const port = process.env.DEV_PORT || 5000

const app= express();
app.listen(port, () => console.log(`Server is listening to port ${port}` ))


