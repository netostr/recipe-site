import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!);

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;
}

async function seedRecipeDescriptions() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS recipe_descriptions (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      cook_time SMALLINT NOT NULL CHECK (cook_time >= 0),
      servings SMALLINT NOT NULL CHECK (servings >= 0),
      calories SMALLINT NOT NULL CHECK (calories >= 0),
      image_url VARCHAR(255),
      favorite BOOLEAN NOT NULL
    );
  `;
}

async function seedRecipeIngredients() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS recipe_ingredients (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      recipe_id UUID REFERENCES recipe_descriptions(id) ON DELETE CASCADE,
      name VARCHAR(255) NOT NULL,
      amount REAL CHECK (amount >= 0),
      unit VARCHAR(255) NOT NULL
    );
  `;
}

async function seedRecipeSteps() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS recipe_steps (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      recipe_id UUID REFERENCES recipe_descriptions(id) ON DELETE CASCADE,
      num_step SMALLINT NOT NULL CHECK (num_step > 0),
      description TEXT NOT NULL,
      image_url VARCHAR(255)
    );
  `;
}

export async function GET() {
  try {
    await sql.begin(() => [
      seedUsers(),
      seedRecipeDescriptions(),
      seedRecipeIngredients(),
      seedRecipeSteps(),
    ]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
