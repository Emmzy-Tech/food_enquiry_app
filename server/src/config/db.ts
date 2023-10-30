
import { createPool, Pool } from 'mysql2/promise';

const pool: Pool = createPool({
  host: 'localhost', // Replace with your MySQL host
  user: 'emma', // Replace with your MySQL username
  password: '12345', // Replace with your MySQL password
  database: 'recipe_project', // Replace with your database name
});

export default pool;
