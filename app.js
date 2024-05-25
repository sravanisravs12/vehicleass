require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const vehicleRoutes = require('./Routes/Vehicle');

const app = express();

app.use(bodyParser.json());

// Use the vehicle routes
app.use('/api/vehicle', vehicleRoutes);

const PORT = process.env.PORT || 3000;
mongoose.connect(`mongodb+srv://temp:temp@cluster0.wkea2ju.mongodb.net`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Failed to connect to MongoDB Atlas', err);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});