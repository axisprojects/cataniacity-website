const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Regolamento
app.get('/regolamento', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'regolamento.html'));
});
// Termini di Servizio
app.get('/tos', (req, res) => {
  res.redirect('https://docs.google.com/document/d/1JIYTozInWPClzAAvCCNCrW7L--61kITukCcLUFocIDQ/edit?usp=sharing');
});
// Politica sulla Privacy
app.get('/informativa-privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});
// Politica sui Rimborsi
app.get('/politica-rimborso', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'rimborsi.html'));
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
