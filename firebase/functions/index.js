const functions = require("firebase-functions");
const admin = require('firebase-admin')
admin.initializeApp();

const express = require('express')
const app = require("./src/app");

// Middleware para parsear JSON
app.use(express.json());

// Ruta de autenticación
app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const userRecord = await admin.auth().getUserByEmail(email);
    
    return res.status(200).json({
      uid: userRecord.uid,
      email: userRecord.email
    });
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
});

exports.api = functions.https.onRequest(app);
