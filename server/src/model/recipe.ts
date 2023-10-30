// src/models/Recipe.ts
import { Pool } from 'mysql2/promise';

export interface Recipe {
    [key: string]: any;
  }

export class RecipeModel {
  constructor(private pool: Pool) {}

  async getAllRecipes(): Promise<Recipe[]> {
    const [rows] = await this.pool.query('SELECT * FROM recipes');

    return rows as Recipe[];
  }

  // Add more methods for CRUD operations on the 'recipes' table
}
