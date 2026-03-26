import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { sellers, products, creatorInfo, buyers } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedSellers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS sellers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password TEXT NOT NULL
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

async function seedCreatorInfo() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS creatorInfo (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedcreatorInfo = await Promise.all(
    creatorInfo.map(
      (sellers) => sql`
        INSERT INTO creatorInfo (customer_id, amount, status, date)
        VALUES (${sellers.customer_id}, ${sellers.amount}, ${sellers.status}, ${sellers.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedcreatorInfo;
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

async function seedBuyers() {
  await sql`
    CREATE TABLE IF NOT EXISTS buyers (
      id VARCHAR(4) NOT NULL UNIQUE,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password TEXT NOT NULL
    );
  `;

  const insertedBuyers = await Promise.all(
    buyers.map(
      (buyers) => sql`
        INSERT INTO revenue (id, name, email, password)
        VALUES (${buyers.id}, ${buyers.name},${buyers.email},${buyers.password})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedBuyers;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedSellers(),
      seedCreatorInfo(),
      seedProducts(),
      seedBuyers(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}