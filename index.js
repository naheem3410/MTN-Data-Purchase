const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const purchaseRoutes = require('./routes/purchases');
const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mtn-data', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/purchases', purchaseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
