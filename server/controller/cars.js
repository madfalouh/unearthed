import { pool } from '../config/database.js'
  
const getCars = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM cars ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};


const getCarById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT *
      FROM cars
      WHERE id=$1
    `;

    const carId = req.params.carId;

    const results = await pool.query(selectQuery, [carId]);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
 
const addCar = async (req, res) => {
    console.log(req.body);
    try {
        const { name,roof, wheels, interior, convertible } = req.body;
         const insertQuery = `
            INSERT INTO cars (name,roof, wheels, interior, convertible)
            VALUES ($1, $2, $3, $4 , $5) RETURNING *;
        `;

        const results = await pool.query(insertQuery, [name,roof, wheels, interior, convertible]);
        res.status(201).json(results.rows[0]);
    } catch (error) {
        console.log(error.message);
        res.status(409).json({ error: error.message });
    }
};

const updateCarById = async (req, res) => {
    try {
        const carId = req.params.carId;
        const { name , roof, wheels, interior, convertible } = req.body;

        const updateQuery = `
            UPDATE cars
            SET name =$1, roof=$2, wheels=$3, interior=$4, convertible=$5
            WHERE id=$6 RETURNING *;
        `;

        const results = await pool.query(updateQuery, [name,roof, wheels, interior, convertible, carId]);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

const deleteCarById = async (req, res) => {
    try {
        const carId = req.params.carId;

        const deleteQuery = `
            DELETE FROM cars
            WHERE id=$1 RETURNING *;
        `;

        const results = await pool.query(deleteQuery, [carId]);

        if (results.rows.length === 0) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json({ message: `Car with ID ${carId} deleted successfully.` });
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
};

export { getCars, getCarById, addCar, updateCarById, deleteCarById };