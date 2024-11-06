import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { products } from './schema.js';
import * as dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL environment variable is required');
  process.exit(1);
}

const client = postgres(DATABASE_URL);
const db = drizzle(client, { schema: { products } });

const seedData = [
  {
    name: 'GAN 356 X V2',
    description: 'Professional magnetic speed cube with customizable tension and magnet strength.',
    price: 59.99,
    imageUrl: 'https://cuboss.com/wp-content/uploads/2020/01/gan-356-x-magnets.jpg',
    stock: 50,
    category: 'speed',
    brand: 'GAN',
    difficulty: 'advanced',
    features: {
      size: '56mm',
      weight: '63g',
      adjustableMagnets: true,
      adjustableTension: true,
      cornerCutting: '45°'
    },
    isNewRelease: false,
    isFeatured: true
  },
  {
    name: 'MoYu RS3M 2020',
    description: 'Best budget magnetic speed cube with premium performance.',
    price: 8.99,
    imageUrl: 'https://cuboss.com/wp-content/uploads/2020/07/moyu-rs3-m-2020.jpg',
    stock: 100,
    category: 'speed',
    brand: 'MoYu',
    difficulty: 'intermediate',
    features: {
      size: '55.5mm',
      weight: '84g',
      adjustableMagnets: false,
      adjustableTension: true,
      cornerCutting: '40°'
    },
    isNewRelease: false,
    isFeatured: true
  },
  {
    name: 'DaYan TengYun M',
    description: 'Ultra-quiet magnetic speed cube perfect for silent solving.',
    price: 24.99,
    imageUrl: 'https://cuboss.com/wp-content/uploads/2020/02/dayan-tengyun-m-stickerless.jpg',
    stock: 30,
    category: 'speed',
    brand: 'DaYan',
    difficulty: 'intermediate',
    features: {
      size: '55mm',
      weight: '74g',
      adjustableMagnets: false,
      adjustableTension: true,
      cornerCutting: '45°'
    },
    isNewRelease: true,
    isFeatured: true
  },
  {
    name: 'YJ YuLong V2 M',
    description: 'Entry-level magnetic speed cube great for beginners.',
    price: 7.99,
    imageUrl: 'https://cuboss.com/wp-content/uploads/2020/01/yj-yulong-v2-m-stickerless.jpg',
    stock: 150,
    category: 'beginner',
    brand: 'YJ',
    difficulty: 'beginner',
    features: {
      size: '55.5mm',
      weight: '82g',
      adjustableMagnets: false,
      adjustableTension: false,
      cornerCutting: '35°'
    },
    isNewRelease: false,
    isFeatured: false
  }
];

async function seed() {
  console.log('Seeding database...');
  
  try {
    // Clear existing data
    await db.delete(products);
    console.log('Cleared existing products');

    // Insert new data
    for (const product of seedData) {
      await db.insert(products).values(product);
      console.log(`Inserted product: ${product.name}`);
    }
    
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

seed();