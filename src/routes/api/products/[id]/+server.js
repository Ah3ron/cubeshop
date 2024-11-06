import { db } from '$lib/server/db';
import { products } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const result = await db
        .select()
        .from(products)
        .where(eq(products.id, params.id))
        .limit(1);

    if (result.length === 0) {
        return new Response(JSON.stringify({ error: 'Product not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    return new Response(JSON.stringify(result[0]), {
        headers: { 'Content-Type': 'application/json' }
    });
}