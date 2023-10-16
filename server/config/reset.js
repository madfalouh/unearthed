import './dotenv.js'
import { pool } from './database.js';
import carsData from '../data/cars.js';

const createCarsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS cars;
  
      CREATE TABLE IF NOT EXISTS cars (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL , 
          roof JSONB NOT NULL,
          wheels JSONB NOT NULL,
          interior JSONB NOT NULL,
          convertible VARCHAR(10) NOT NULL
      )`;

  try {
    await pool.query(createTableQuery);
    console.log('🚗 cars table created successfully');
  } catch (err) {
    console.error('⚠️ error creating cars table', err);
  }
};



const seedCarsTable = async () => {
  await createCarsTable();
  
  for (const car of carsData) {
    const insertQuery = {
      text: 'INSERT INTO cars (name,roof, wheels, interior, convertible) VALUES ($1, $2, $3, $4 ,$5 )',
      values: [
        car.name,
        JSON.stringify(car.roof),
        JSON.stringify(car.wheels),
        JSON.stringify(car.interior),
        car.convertible
      ]
    };
    
    try {
      await pool.query(insertQuery);
      console.log(`✅ Car with ID ${car.id} added successfully`);
    } catch (err) {
      console.error('⚠️ error inserting car', err);
    }
  }
};

seedCarsTable();