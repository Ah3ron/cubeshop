import { db } from '$lib/server/db'; // Your database setup
import { products } from '$lib/server/db/schema'; // Your schema file
import { gte, lte, eq, and } from 'drizzle-orm';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const category = url.searchParams.get('category');
    const minPrice = parseFloat(url.searchParams.get('minPrice') || '0');
    const maxPrice = parseFloat(url.searchParams.get('maxPrice') || '1000000');
    const isNewRelease = url.searchParams.get('isNewRelease') === 'true';
    const isFeatured = url.searchParams.get('isFeatured') === 'true';

    const conditions = [
        gte(products.price, minPrice),
        lte(products.price, maxPrice)
    ];

    if (category) {
        conditions.push(eq(products.category, category));
    }

    if (isNewRelease) {
        conditions.push(eq(products.isNewRelease, true));
    }

    if (isFeatured) {
        conditions.push(eq(products.isFeatured, true));
    }

    const result = await db
        .select()
        .from(products)
        .where(and(...conditions));

    return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
    });
}
