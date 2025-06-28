// File: server/index.js

const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const DB_PATH = path.join(__dirname, 'db.sqlite');

if (!fs.existsSync(DB_PATH)) {
  const initDB = new Database(DB_PATH);
  initDB.prepare(`CREATE TABLE IF NOT EXISTS diary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    title TEXT,
    kai TEXT,
    pi TEXT,
    emoji TEXT,
    visual TEXT,
    notes TEXT
  )`).run();
  initDB.close();
}

const db = new Database(DB_PATH);
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());

app.get('/entries', (req, res) => {
  const entries = db.prepare('SELECT * FROM diary ORDER BY date DESC').all();
  res.json(entries);
});
app.get('/entry/:id', (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare('SELECT * FROM diary WHERE id = ?');
  const entry = stmt.get(id); // .get() returns a single row

  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ error: 'Entry not found' });
  }
});

app.post('/entry', (req, res) => {
  const { date, title, kai, pi, emoji, visual, notes } = req.body;
  const stmt = db.prepare(`INSERT INTO diary (date, title, kai, pi, emoji, visual, notes)
                           VALUES (?, ?, ?, ?, ?, ?, ?)`);
  stmt.run(date, title, kai, pi, emoji, visual, notes);
  res.json({ success: true });
});

app.put('/entry/:id', (req, res) => {
  const { id } = req.params;
  const { date, title, kai, pi, emoji, visual, notes } = req.body;
  const stmt = db.prepare(`UPDATE diary SET date=?, title=?, kai=?, pi=?, emoji=?, visual=?, notes=? WHERE id=?`);
  stmt.run(date, title, kai, pi, emoji, visual, notes, id);
  res.json({ success: true });
});

app.delete('/entry/:id', (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare('DELETE FROM diary WHERE id = ?');
  stmt.run(id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Kai Diary server running at http://localhost:${PORT}`);
});
