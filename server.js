const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Mongoose Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  phone: String,
  email: String,
  gender: String,
  licenseYes: String,
  licenseNo: String,
  address: String,
  year: String,
  java: String,
  portfolio: String,
  resumeFile: String,
});
const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// File upload
const upload = multer({ dest: 'uploads/' });

// Routes
app.post('/submit', upload.single('resume'), async (req, res) => {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dob,
    phone: req.body.phone,
    email: req.body.email,
    gender: req.body.gender,
    licenseYes: req.body.licenseYes,
    licenseNo: req.body.licenseNo,
    address: req.body.address,
    year: req.body.year,
    java: req.body.java,
    portfolio: req.body.portfolio,
    resumeFile: req.file?.originalname,
  };

  try {
    const newUser = new User(data);
    await newUser.save();
    res.send(`
      <h2>✅ Submitted & Saved to MongoDB</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
      <a href="/">Go Back</a>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send('❌ Error saving to MongoDB');
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
