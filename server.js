const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for file upload
const upload = multer({ dest: 'uploads/' });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname))); 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', upload.single('resume'), (req, res) => {
  const data = {
    firstName:req.body.firstName,
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

  res.send(`
    <h2>Submitted Data:</h2>
    <pre>${JSON.stringify(data, null, 2)}</pre>
    <a href="/">Go Back</a>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
