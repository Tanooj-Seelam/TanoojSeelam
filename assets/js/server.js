const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Email configuration (update with your own email provider settings)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service provider
  auth: {
    user: 'tanooj.seelam1020@gmail.com', // replace with your email
    pass: 'tanooj seelam'   // replace with your password
  }
});

app.post('/send', (req, res) => {
  const { fullName, email, message } = req.body;

  // Email to yourself
  const mailOptionsToSelf = {
    from: email,
    to: 'tanooj.seelam1020@gmail.com', // replace with your email
    subject: 'New Contact Form Submission',
    text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`
  };

  // Email to the submitter (Template)
  const mailOptionsToSubmitter = {
    from: 'tanooj.seelam1020@gmail.com', // replace with your email
    to: email,
    subject: 'Thank you for contacting us!',
    text: `Dear ${fullName},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nYour Company Name`
  };

  // Send emails
  transporter.sendMail(mailOptionsToSelf, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error while sending email to yourself');
    }

    transporter.sendMail(mailOptionsToSubmitter, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Error while sending email to the submitter');
      }

      res.status(200).send('Emails sent successfully!');
    });
  });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
