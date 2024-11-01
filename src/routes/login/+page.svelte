<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-base-200">
	<div class="w-full max-w-md rounded-lg bg-base-100 p-6 shadow-lg">
		<h1 class="mb-6 text-center text-2xl font-bold text-neutral-content">Login / Register</h1>
		<form method="post" action="?/login" use:enhance class="space-y-4">
			<div class="form-control">
				<!-- svelte-ignore a11y_label_has_associated_control -->
				<label class="label label-text font-semibold text-neutral-content">Username</label>
				<input
					name="username"
					class="input input-bordered w-full"
					placeholder="Enter your username"
					required
				/>
			</div>
			<div class="form-control">
				<!-- svelte-ignore a11y_label_has_associated_control -->
				<label class="label label-text font-semibold text-neutral-content">Password</label>
				<input
					type="password"
					name="password"
					class="input input-bordered w-full"
					placeholder="Enter your password"
					required
				/>
			</div>
			<div class="flex items-center justify-around pt-4">
				<button class="btn btn-primary mr-2 w-2/5">Login</button>
				<button formaction="?/register" class="btn btn-accent ml-2 w-2/5">Register</button>
			</div>
		</form>
		<p class="mt-4 text-center text-error">{form?.message ?? ''}</p>
	</div>
</div>
