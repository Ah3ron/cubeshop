<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/** @type {{category?: string, brand?: string, difficulty?: string, minPrice?: string, maxPrice?: string, applyFilters: any, resetFilters: any}} */
	let {
		category = $bindable(''),
		brand = $bindable(''),
		difficulty = $bindable(''),
		minPrice = $bindable(''),
		maxPrice = $bindable(''),
		applyFilters,
		resetFilters
	} = $props();
</script>

<div class="bg-base-200 p-4 rounded-lg sticky top-4">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-xl font-semibold">Filters</h2>
		<button 
			onclick={resetFilters}
			class="btn btn-ghost btn-sm"
		>
			Reset
		</button>
	</div>
	
	<div class="space-y-4">
		<div>
			<label for="category" class="label">Category</label>
			<select
				id="category"
				bind:value={category}
				onchange={() => dispatch('categoryChange', category)}
				class="select select-bordered w-full"
			>
				<option value="">All</option>
				<option value="speed">Speed Cubes</option>
				<option value="beginner">Beginner Cubes</option>
				<option value="accessories">Accessories</option>
			</select>
		</div>

		<div>
			<label for="brand" class="label">Brand</label>
			<input
				id="brand"
				type="text"
				bind:value={brand}
				oninput={() => dispatch('brandChange', brand)}
				class="input input-bordered w-full"
				placeholder="Brand"
			/>
		</div>

		<div>
			<label for="difficulty" class="label">Difficulty</label>
			<select
				id="difficulty"
				bind:value={difficulty}
				onchange={() => dispatch('difficultyChange', difficulty)}
				class="select select-bordered w-full"
			>
				<option value="">All</option>
				<option value="Beginner">Beginner</option>
				<option value="Intermediate">Intermediate</option>
				<option value="Advanced">Advanced</option>
			</select>
		</div>

		<div>
			<label for="minPrice" class="label">Min Price</label>
			<input
				id="minPrice"
				type="number"
				bind:value={minPrice}
				oninput={() => dispatch('minPriceChange', minPrice)}
				class="input input-bordered w-full"
				placeholder="Min Price"
			/>
		</div>

		<div>
			<label for="maxPrice" class="label">Max Price</label>
			<input
				id="maxPrice"
				type="number"
				bind:value={maxPrice}
				oninput={() => dispatch('maxPriceChange', maxPrice)}
				class="input input-bordered w-full"
				placeholder="Max Price"
			/>
		</div>

		<button onclick={applyFilters} class="btn btn-primary w-full">
			Apply Filters
		</button>
	</div>
</div>