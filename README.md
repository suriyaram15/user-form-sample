# 📝 User Form Sample

A simple web-based user registration form built with **HTML**, **Node.js**, **Express**, and **MongoDB Atlas**. The application allows users to submit personal information and upload a resume, which is then stored in a MongoDB database.

🚀 Live Demo: [https://user-form-sample-1.onrender.com](https://user-form-sample-1.onrender.com)

---

## 📁 Features

- Collects user details including name, DOB, contact info, address, etc.
- Uploads resume using `multer`
- Stores submitted data in MongoDB Atlas using `mongoose`
- Server-side validation using Express
- Responsive and clean HTML form
- Displays confirmation upon successful submission

---

## 🖥️ Tech Stack

- **Frontend**: HTML5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Other Packages**:
  - `mongoose` for MongoDB ODM
  - `multer` for handling file uploads
  - `dotenv` for environment configuration
  - `body-parser` for parsing form data

---

## 📷 Preview

![Form Screenshot](https://raw.githubusercontent.com/suriyaram15/user-form-sample/refs/heads/main/Screenshot.png)

---

## 🚦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/suriyaram15/user-form-sample.git
cd user-form-sample
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run the Server

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000)

---

## 🔍 Folder Structure

```
user-form-sample/
│
├── index.html            # Frontend form
├── server.js             # Express backend
├── uploads/              # Uploaded resumes (auto-created)
├── public/               # Static assets (optional)
├── .env                  # MongoDB URI (you create this)
├── package.json          # Project metadata and dependencies
```

---

## 🧪 Form Fields Collected

- First Name, Last Name
- Date of Birth
- Phone Number, Email ID
- Gender
- License (Yes/No)
- Address
- Passed Out Year
- Java Knowledge (0–10 range)
- Resume Upload
- Portfolio URL

---

## 📜 License

This project is licensed under the [ISC License](LICENSE).

---

## 💡 Future Improvements

- Add frontend validation and better UI
- Connect uploaded file to cloud storage (e.g., S3)
- Add admin panel to view submissions
