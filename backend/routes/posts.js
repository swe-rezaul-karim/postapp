import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM posts ORDER BY id DESC');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const { rows } = await pool.query(
    'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  res.status(201).json(rows[0]);
});

export default router;