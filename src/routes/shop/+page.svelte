<script>

	export let data;
	const { products } = data;

	// Filter states
	let category = '';
	let brand = '';
	let difficulty = '';
	let minPrice = '';
	let maxPrice = '';

	// Function to update URL with selected filters (triggers page reload with new filters)
	const applyFilters = () => {
		const params = new URLSearchParams();
		if (category) params.set('category', category);
		if (brand) params.set('brand', brand);
		if (difficulty) params.set('difficulty', difficulty);
		if (minPrice) params.set('minPrice', minPrice);
		if (maxPrice) params.set('maxPrice', maxPrice);
		window.location.search = params.toString();
	};
</script>

<div class="min-h-screen bg-base-100 p-4">
	<h1 class="text-3xl font-bold mb-4">Product Catalog</h1>

	<!-- Filter Section -->
	<div class="flex flex-wrap gap-4 mb-8">
		<div>
			<label class="label">Category</label>
			<select bind:value={category} class="select select-bordered w-full max-w-xs">
				<option value="">All</option>
				<option value="speed">Speed Cubes</option>
				<option value="beginner">Beginner Cubes</option>
				<option value="accessories">Accessories</option>
			</select>
		</div>
		<div>
			<label class="label">Brand</label>
			<input type="text" bind:value={brand} class="input input-bordered w-full max-w-xs" placeholder="Brand" />
		</div>
		<div>
			<label class="label">Difficulty</label>
			<select bind:value={difficulty} class="select select-bordered w-full max-w-xs">
				<option value="">All</option>
				<option value="Beginner">Beginner</option>
				<option value="Intermediate">Intermediate</option>
				<option value="Advanced">Advanced</option>
			</select>
		</div>
		<div>
			<label class="label">Min Price</label>
			<input type="number" bind:value={minPrice} class="input input-bordered w-full max-w-xs" placeholder="Min Price" />
		</div>
		<div>
			<label class="label">Max Price</label>
			<input type="number" bind:value={maxPrice} class="input input-bordered w-full max-w-xs" placeholder="Max Price" />
		</div>
		<div class="flex items-end">
			<button on:click={applyFilters} class="btn btn-primary mt-4">Apply Filters</button>
		</div>
	</div>

	<!-- Product List -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
		{#each products as product}
			<div class="card shadow-lg bg-base-100">
				<figure>
					<!-- <img src={product.imageUrl} alt={product.name} class="w-full h-48 object-cover" />s -->
				</figure>
				<div class="card-body">
					<h2 class="card-title text-lg font-bold">{product.name}</h2>
					<p class="text-gray-500">{product.description}</p>
					<p class="text-primary font-semibold mt-2">${product.price}</p>
					<p class="text-sm text-gray-600 mt-1">Category: {product.category}</p>
					<p class="text-sm text-gray-600">Difficulty: {product.difficulty}</p>
					<div class="card-actions mt-4">
						<button class="btn btn-primary w-full">Add to Cart</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
