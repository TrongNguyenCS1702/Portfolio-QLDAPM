// Deprecated: This file is deprecated and will be removed in a future release. 


const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noreply.blank@gmail.com',
    pass: 'Blank@123456',
  },
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'noreply.trashmail123@gmail.com', // Update with your recipient email
    subject: `New message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred. Please try again.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 4000; // Use the port provided by environment variable or default to 4000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));