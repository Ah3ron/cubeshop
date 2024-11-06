/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const response = await fetch(`/api/products/${params.id}`);
    const product = await response.json();
    return { product };
}