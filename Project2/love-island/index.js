const express = require('express');
const connectToDB = require('./src/configs/dbConfig.js');
const userRouter = require('./src/routes/userRoute.js');
const app = express();
connectToDB();

app.use(express.json());
app.use('/api/v1/love-island', userRouter);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})