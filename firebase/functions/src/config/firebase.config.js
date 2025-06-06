const admin = require('firebase-admin');
admin.initializeApp(); // Se basa en la configuración interna de Firebase Functions
const db = admin.firestore();
module.exports = {admin, db};
