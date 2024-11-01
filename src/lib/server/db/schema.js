import { float } from 'drizzle-orm/mysql-core';
import { pgTable, text, integer, timestamp, uuid, boolean, jsonb, decimal } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const products = pgTable('products', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	price: decimal('price').notNull(),
	imageUrl: text('image_url').notNull(),
	stock: integer('stock').notNull(),
	category: text('category').notNull(),
	brand: text('brand').notNull(),
	difficulty: text('difficulty').notNull(),
	features: jsonb('features').notNull(),
	isNewRelease: boolean('is_new_release').default(false).notNull(),
	isFeatured: boolean('is_featured').default(false).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});