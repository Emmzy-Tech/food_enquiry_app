import express from 'express';
import pool from '../config/db';
import { RecipeModel } from '../model/recipe';

const router = express.Router();
const recipeModel = new RecipeModel(pool);

// Get all recipes
router.get('/', async (req: Request, res: Response) => {
    try {
      const recipes = await recipeModel.getAllRecipes();
      res.json(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  

export default router;
