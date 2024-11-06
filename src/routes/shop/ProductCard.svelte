<script>
	/** @type {{product: any}} */
	let { product } = $props();
</script>

<a href="/shop/{product.id}" class="card shadow-lg bg-base-100 hover:shadow-xl transition-shadow">
	<figure>
		<img src={product.imageUrl} alt={product.name} class="w-full h-64 object-cover" />
	</figure>
	<div class="card-body">
		<h2 class="card-title text-lg font-bold">{product.name}</h2>
		<p class="text-gray-500 line-clamp-2">{product.description}</p>
		<p class="text-primary font-semibold mt-2">${product.price}</p>
		<div class="flex gap-2 mt-2">
			<span class="badge badge-outline">{product.category}</span>
			<span class="badge badge-outline">{product.difficulty}</span>
		</div>
		<div class="card-actions mt-4">
			<button class="btn btn-primary w-full">View Details</button>
		</div>
	</div>
</a>