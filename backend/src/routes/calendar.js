const express = require('express');
const db = require('../db/connection'); // Assuming you have a db module for database connection

const router = express.Router();

//Prefix '/api/calendar' for endpoint

let events = ['test'];

// Calendar Routes
router.get('/', (req, res) => {
  res.send('Hello Calendar Api')
});

// GET route to fetch user events
router.get('/events', async (req, res) => {
  const user_id = req.cookies.userId;  // Assuming you are storing user_id in cookies

  try {
      const result = await db.query('SELECT * FROM calendar_events WHERE user_id = $1', [user_id]);
      console.log('Fetched events:', result.rows);
      res.json(result.rows);
  } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).send({ message: 'Error fetching events' });
  }
});

// Receive calendar event form
router.post('/events', async (req, res) => {

  const user_id = req.cookies.userId;

  const { title, date, start, end, allDay } = req.body;

  const queryText = `
    INSERT INTO calendar_events (
      user_id, title, date, start_time, end_time, all_day
    ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
  `;

  const queryParams = [
    user_id, title, date, start, end, allDay || false // Set all_day to false if not provided
  ];

  console.log("queryParams: ", queryParams);

  try {
    const result = await db.query(queryText, queryParams);
    res.status(201).send(result.rows[0]);
  } catch (error) {
    console.error('Error adding event to database:', error);
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;