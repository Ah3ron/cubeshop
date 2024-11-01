<script>
	import { enhance } from '$app/forms';

	let { data } = $props();
</script>

<div class="flex items-center justify-center min-h-screen bg-base-200">
	<div class="bg-base-100 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
		<h1 class="text-2xl font-bold text-neutral-content mb-4">Hi, {data.user.username}!</h1>
		<p class="text-lg text-neutral-content mb-6">Your user ID is {data.user.id}.</p>
		<form method="post" action="?/logout" use:enhance>
			<button class="btn btn-error w-full">Sign out</button>
		</form>
	</div>
</div>
