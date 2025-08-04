const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// MongoDB Connection (replace password if needed)
mongoose.connect('mongodb+srv://root:root@cluster0.h3c80.mongodb.net/userFormDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

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

// Multer setup
const upload = multer({ dest: 'uploads/' });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

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
    await newUser.save(); // Save to MongoDB
    res.send(`
      <h2>✅ Submitted & Saved to MongoDB Atlas</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
      <a href="/">Go Back</a>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send('❌ Error saving to database');
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
