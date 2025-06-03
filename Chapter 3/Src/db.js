import Database from 'better-sqlite3';

const db = new Database(':memory:'); // creates in-memory DB

// execute SQL queries
db.exec(`
  CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )
`);

db.exec(`
  CREATE TABLE todos (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    task TEXT,
    completed BOOLEAN DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES user(id)
  )
`);

export default db;
