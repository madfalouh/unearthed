import { pool } from '../config/database.js'
  
const getGifts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};


const getGiftById = async (req, res) => {
  try {
    // Create a SQL query to retrieve gift details by ID
    const selectQuery = `
      SELECT name, pricepoint, audience, image, description, submittedby, submittedon
      FROM gifts
      WHERE id=$1
    `;

    // Extract the giftId from req.params
    const giftId = req.params.giftId;

    // Query the database to obtain the gift with the matching giftId
    const results = await pool.query(selectQuery, [giftId]);

    // Send status 200 and the first row of the results as JSON
    res.status(200).json(results.rows[0]);
  } catch (error) {
    // Send status 409 and the error message as JSON in case of an error
    res.status(409).json({ error: error.message });
  }
};
 


export { getGifts, getGiftById };
