const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

const dbPath = process.env.DATABASE_PATH || path.join(__dirname, '../../data/inspiration.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to SQLite database');
});

// Initialize database tables
const initDatabase = () => {
    db.serialize(() => {
        // Create your tables here
        db.run(`CREATE TABLE IF NOT EXISTS inspirations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
    });
};

module.exports = {
    db,
    initDatabase
}; 