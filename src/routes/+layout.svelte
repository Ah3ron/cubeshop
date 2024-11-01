<script>
	import '../app.css';
	let { children, data } = $props();
</script>

<div class="min-h-screen bg-base-100">
	<header class="navbar bg-base-200">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul
					tabindex="0"
					class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li><a href="/">Home</a></li>
					<li><a href="/shop">Shop</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</div>
			<a href="/" class="btn btn-ghost text-xl">CubeShop</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/">Home</a></li>
				<li><a href="/shop">Shop</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			{#if data.user}
				<div class="dropdown dropdown-end">
					<div tabindex="0" role="button" class="btn btn-circle btn-ghost">
						<div class="avatar placeholder">
							<div class="w-10 rounded-full bg-neutral text-neutral-content">
								<span class="text-xs">{data.user.username}</span>
							</div>
						</div>
					</div>
					<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
					<ul
						tabindex="0"
						class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
					>
						<li><a href="/profile">Profile</a></li>
						<li><a href="/orders">Orders</a></li>
						<li>
							<form method="POST" action="/logout">
								<button type="submit" class="w-full text-left">Logout</button>
							</form>
						</li>
					</ul>
				</div>
			{:else}
				<a href="/login" class="btn btn-ghost">Login</a>
			{/if}
			<a href="/cart" class="btn btn-circle btn-ghost">
				<div class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
					<span class="badge indicator-item badge-sm">0</span>
				</div>
			</a>
		</div>
	</header>

	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>

	<footer class="footer bg-base-200 p-10 text-base-content">
		<nav>
			<h6 class="footer-title">Shop</h6>
			<a href="/shop" class="link-hover link">All Cubes</a>
			<a href="/shop/speedcubes" class="link-hover link">Speed Cubes</a>
			<a href="/shop/beginner" class="link-hover link">Beginner Cubes</a>
			<a href="/shop/accessories" class="link-hover link">Accessories</a>
		</nav>
		<nav>
			<h6 class="footer-title">Company</h6>
			<a href="/about" class="link-hover link">About us</a>
			<a href="/contact" class="link-hover link">Contact</a>
			<a href="/shipping" class="link-hover link">Shipping</a>
			<a href="/returns" class="link-hover link">Returns</a>
		</nav>
		<nav>
			<h6 class="footer-title">Legal</h6>
			<a href="/terms" class="link-hover link">Terms of use</a>
			<a href="/privacy" class="link-hover link">Privacy policy</a>
			<a href="/cookie" class="link-hover link">Cookie policy</a>
		</nav>
	</footer>
</div>
