const express = require('express');
const mongoose = require('mongoose');
const sectorsRoutes = require('./routes/sectorRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error(error));


app.use('/', userRoutes);
app.use('/', sectorsRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
