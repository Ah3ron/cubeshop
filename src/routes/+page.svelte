<script>
	let featured = [
		{
			id: '1',
			name: 'GAN 356 X V2',
			price: 5999,
			imageUrl: 'https://m.media-amazon.com/images/I/51YazSpV3fL._AC_SL1100_.jpg',
			description: 'Professional magnetic speed cube'
		},
		{
			id: '2',
			name: 'MoYu RS3M 2020',
			price: 899,
			imageUrl: 'https://m.media-amazon.com/images/I/51bHycHLJPL._AC_SL1000_.jpg',
			description: 'Best budget magnetic speed cube'
		},
		{
			id: '3',
			name: 'DaYan TengYun M',
			price: 2499,
			imageUrl: 'https://m.media-amazon.com/images/I/51G61KSnYHL._AC_SL1000_.jpg',
			description: 'Ultra-quiet magnetic speed cube'
		}
	];
</script>

<svelte:head>
	<title>CubeShop - Premium Rubik's Cubes</title>
</svelte:head>

<section class="hero min-h-[80vh] bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Welcome to CubeShop</h1>
			<p class="py-6">Your one-stop shop for premium Rubik's cubes and speedcubing accessories.</p>
			<a href="/shop" class="btn btn-primary">Shop Now</a>
		</div>
	</div>
</section>

<section class="py-16">
	<h2 class="text-3xl font-bold text-center mb-8">Featured Products</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each featured as product}
			<div class="card bg-base-100 shadow-xl">
				<figure class="px-10 pt-10">
					<img src={product.imageUrl} alt={product.name} class="rounded-xl" />
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">{product.name}</h2>
					<p>{product.description}</p>
					<p class="text-xl font-bold">${(product.price / 100).toFixed(2)}</p>
					<div class="card-actions">
						<a href="/shop/{product.id}" class="btn btn-primary">View Details</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="py-16 bg-base-200">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="text-center">
				<div class="text-4xl mb-4">🚚</div>
				<h3 class="text-xl font-bold mb-2">Fast Shipping</h3>
				<p>Free shipping on orders over $50</p>
			</div>
			<div class="text-center">
				<div class="text-4xl mb-4">⭐</div>
				<h3 class="text-xl font-bold mb-2">Quality Products</h3>
				<p>Only genuine, high-quality cubes</p>
			</div>
			<div class="text-center">
				<div class="text-4xl mb-4">💬</div>
				<h3 class="text-xl font-bold mb-2">Expert Support</h3>
				<p>Get help from speedcubing experts</p>
			</div>
		</div>
	</div>
</section>