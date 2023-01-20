import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import db from '../db';
import { uuid } from 'uuidv4';

dotenv.config();

const deckRouter = express.Router();

deckRouter.get('/:id', (req: Request, res: Response) => {
    db.all("SELECT * FROM decks WHERE id = ? ", [req.params.id], function(err, data) {
        res.send(data);
    });
});

deckRouter.delete('/:id', (req: Request, res: Response) => {
    db.all("DELETE FROM decks WHERE id = ? ", [req.params.id], function(err, data) {
        res.send(data);
    });
});

deckRouter.get('/', (req: Request, res: Response) => {
    db.all("SELECT * FROM decks", function(err, rows) {
        res.send(rows);
    });
});

deckRouter.post('/', (req: Request, res: Response) => {
    // const table = 'decks'
    // const fields = '(id, userId, createdAt, updatedAt, name)'
    // const values = `(${uuid().toString()}, ${'1'}, ${new Date().toLocaleString()}, ${new Date().toLocaleString()}, ${req.body.name},)`
    db.run(`INSERT INTO decks (id, userId, createdAt, updatedAt, name) VALUES ( ?, ?, ?, ?, ?)`, 
        [uuid().toString(), req.body.userId, new Date().toLocaleString(), new Date().toLocaleString(), req.body.name], 
        function(err) {
        if (err) {
            return console.log(err.message);
        }
    });
    res.send(req.body.name);
});

export default deckRouter;