const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'rakib.islam.ps24@gmail.com',
    pass: process.env.EMAIL_PASSWORD || process.env.GMAIL_APP_PASSWORD,
  },
});

const projects = [
 {
   id: 1,
   title: "Portfolio Website",
   description: "A personal portfolio built with React and Express.",
   tech: ["React", "Express", "CSS"],
   github: "https://github.com/yourusername/portfolio",
   demo: "https://your-demo-link.com"
 },
 {
   id: 2,
   title: "Weather App",
   description: "A simple weather application using API integration.",
   tech: ["React", "API", "JavaScript"],
   github: "https://github.com/yourusername/weather-app",
   demo: "https://your-weather-demo.com"
 }
];

app.get("/", (req, res) => {
 res.send("Portfolio API is running");
});

app.get("/projects", (req, res) => {
 res.json(projects);
});

app.post("/contact", (req, res) => {
 const { name, email, message } = req.body;

 if (!name || !email || !message) {
   return res.status(400).json({ error: "All fields are required" });
 }

 console.log("Contact form submitted:", { name, email, message });

 res.json({ message: "Message received successfully" });
});

// Endpoint for requesting access to protected content
app.post("/api/request-access", async (req, res) => {
  try {
    const { message } = req.body;

    // Email to owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'rakib.islam.ps24@gmail.com',
      to: 'rakib.islam.ps24@gmail.com',
      subject: '🔐 Passkey Access Request from Portfolio Visitor',
      html: `
        <h2>New Access Request</h2>
        <p><strong>Message:</strong> ${message}</p>
        <p>Someone visited your portfolio and requested access to protected content.</p>
        <p>Please reply to them with the passkey to grant access.</p>
        <hr />
        <p><em>This is an automated email from your portfolio.</em></p>
      `,
    });

    // Confirmation email to visitor
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'rakib.islam.ps24@gmail.com',
      to: 'rakib.islam.ps24@gmail.com', // In production, get from request body
      subject: '📧 Access Request Received',
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Your request to access the protected content has been sent to Rakib.</p>
        <p>You will receive the passkey via email shortly.</p>
        <hr />
        <p>Best regards,<br />Rakib's Portfolio</p>
      `,
    });

    res.status(200).json({ message: "Access request sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send request" });
  }
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

console.log('Starting server; PORT =', PORT);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
