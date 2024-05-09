<script lang="ts">
	import { page } from "$app/stores";
	import Notification from "$lib/components/Notification.svelte";
</script>

{#if $page.form}
	<Notification {...$page.form} />
{/if}

<main class="text-gray-200 flex flex-col items-center mt-24">
	<h2 class="text-5xl font-unbounded mb-4">Exp-T</h2>
	<p>
		Your daily <span class="relative inline-block p-1"
			><span class="absolute w-full h-full bg-cyan-600 top-0 left-0 -z-10 -skew-x-12" />Expense
			Tracker</span
		>
	</p>
	<slot />
</main>
