import sqlite3 from 'sqlite3';

interface Deck {
    id: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    // language: string;
}

interface Card {
    id: string;
    deckId: string;
    createdAt: string;
    updatedAt: string;
    front: string;
    back: string;
    score: number;
    timesPracticed: number;
    level: number;
    lastPracticedAt: Date;
    dueDate?: Date;
}

const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

db.run('CREATE TABLE decks (id, userId, createdAt, updatedAt, name)');

export default db;

