<script>
	import ProductCard from './ProductCard.svelte';
	import FilterSidebar from './FilterSidebar.svelte';

	let { data } = $props();
	const { products } = data;

	// Initialize filters from URL
	let category = $state(data.filters.category);
	let brand = $state(data.filters.brand);
	let difficulty = $state(data.filters.difficulty);
	let minPrice = $state(data.filters.minPrice);
	let maxPrice = $state(data.filters.maxPrice);

	// Function to update URL with selected filters
	const applyFilters = () => {
		const params = new URLSearchParams();
		if (category) params.set('category', category);
		if (brand) params.set('brand', brand);
		if (difficulty) params.set('difficulty', difficulty);
		if (minPrice) params.set('minPrice', minPrice);
		if (maxPrice) params.set('maxPrice', maxPrice);
		window.location.search = params.toString();
	};

	// Function to reset all filters
	const resetFilters = () => {
		category = '';
		brand = '';
		difficulty = '';
		minPrice = '';
		maxPrice = '';
		window.location.search = '';
	};
</script>

<div class="min-h-screen bg-base-100">
	<div class="container mx-auto p-4">
		<h1 class="text-3xl font-bold mb-4">Product Catalog</h1>
		
		<div class="flex flex-col md:flex-row gap-6">
			<!-- Sidebar Filters -->
			<aside class="w-full md:w-64 flex-shrink-0">
				<FilterSidebar
					{category}
					{brand}
					{difficulty}
					{minPrice}
					{maxPrice}
					{applyFilters}
					{resetFilters}
					on:categoryChange={(e) => category = e.detail}
					on:brandChange={(e) => brand = e.detail}
					on:difficultyChange={(e) => difficulty = e.detail}
					on:minPriceChange={(e) => minPrice = e.detail}
					on:maxPriceChange={(e) => maxPrice = e.detail}
				/>
			</aside>

			<!-- Product Grid -->
			<div class="flex-1">
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each products as product}
						<ProductCard {product} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>