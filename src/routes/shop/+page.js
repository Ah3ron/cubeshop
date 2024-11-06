/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
    const category = url.searchParams.get('category') || '';
    const brand = url.searchParams.get('brand') || '';
    const difficulty = url.searchParams.get('difficulty') || '';
    const minPrice = url.searchParams.get('minPrice') || '';
    const maxPrice = url.searchParams.get('maxPrice') || '';

    const query = new URLSearchParams({
        category: url.searchParams.get('category') || '',
        brand: url.searchParams.get('brand') || '',
        difficulty: url.searchParams.get('difficulty') || '',
        minPrice: url.searchParams.get('minPrice') || '',
        maxPrice: url.searchParams.get('maxPrice') || ''
    });

    const response = await fetch(`/api/products?${query.toString()}`);
    const products = await response.json();

    return { 
        products,
        filters: {
            category,
            brand,
            difficulty,
            minPrice,
            maxPrice
        }
    };
}