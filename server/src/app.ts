import express from 'express';
import recipeRoutes from './routes/recipes';
const app = express();
const port = process.env.PORT || 4000;

// Middleware for JSON parsing
app.use(express.json());
app.use('/recipes', recipeRoutes);

// Define routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

