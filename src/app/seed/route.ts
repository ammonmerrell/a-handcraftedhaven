import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { sellers, products, review } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedSellers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS sellers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password TEXT NOT NULL,
      story TEXT
    );
  `;

  const insertedSellers = await Promise.all(
    sellers.map(async (sellers) => {
      const hashedPassword = await bcrypt.hash(sellers.password, 10);
      return sql`
        INSERT INTO sellers (id, name, email, password)
        VALUES (${sellers.id}, ${sellers.name}, ${sellers.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedSellers;
}

async function seedReview() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS review (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      product_id UUID NOT NULL);
  `;

    await sql`
    ALTER TABLE "review"
ADD COLUMN "rating" rating;
  `;
  await sql`
    ALTER TABLE "review"
ADD COLUMN "feedback" text NOT NULL;
  `;
  await sql`
    ALTER TABLE "review"
ADD COLUMN "date" date NOT NULL;
  `;
  

  const insertedReview = await Promise.all(
    review.map(
      (sellers) => sql`
        INSERT INTO review (customer_id, amount, status, date)
        VALUES (${sellers.customer_id}, ${sellers.amount}, ${sellers.status}, ${sellers.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedReview;
}

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      tags VARCHAR(255) NOT NULL
    );
  `;

  const insertedProducts = await Promise.all(
    products.map(
      (product) => sql`
        INSERT INTO products (id, name, description, image_url, price, tage)
        VALUES (${product.id}, ${product.name}, ${product.description}, ${product.image_url}, ${product.price}, ${product.tags})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedProducts;
}



export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedSellers(),
      seedReview(),
      seedProducts()
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}