<script>
	/** @type {{data: any}} */
	let { data } = $props();
	const { product } = data;
</script>

<div class="container mx-auto p-4">
	<div class="max-w-4xl mx-auto bg-base-100 rounded-lg shadow-lg overflow-hidden">
		<div class="md:flex">
			<div class="md:w-1/2">
				<div class="aspect-square relative">
					<img
						src={product.imageUrl}
						alt={product.name}
						class="absolute inset-0 w-full h-full object-contain bg-white p-4"
					/>
				</div>
			</div>
			<div class="p-8 md:w-1/2">
				<div class="flex justify-between items-start">
					<div>
						<h1 class="text-3xl font-bold text-base-content">{product.name}</h1>
						<p class="text-2xl font-bold text-primary mt-2">${product.price}</p>
					</div>
					<div class="flex gap-2">
						<span class="badge badge-outline">{product.category}</span>
						<span class="badge badge-outline">{product.difficulty}</span>
					</div>
				</div>

				<p class="mt-4 text-base-content/80">{product.description}</p>

				<div class="mt-6">
					<h2 class="text-xl font-semibold mb-2">Features</h2>
					<ul class="space-y-2">
						<li>Size: {product.features.size}</li>
						<li>Weight: {product.features.weight}</li>
						<li>Corner Cutting: {product.features.cornerCutting}</li>
						<li>Adjustable Magnets: {product.features.adjustableMagnets ? 'Yes' : 'No'}</li>
						<li>Adjustable Tension: {product.features.adjustableTension ? 'Yes' : 'No'}</li>
					</ul>
				</div>

				<div class="mt-8 flex gap-4">
					<button class="btn btn-primary flex-1">Add to Cart</button>
					<a href="/shop" class="btn btn-outline flex-1">Back to Shop</a>
				</div>
			</div>
		</div>
	</div>
</div>