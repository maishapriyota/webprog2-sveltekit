<script lang="ts">
	import Input from "$lib/components/Input.svelte";
	import type { InputProps } from "$lib/types";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	const inputsProps: InputProps[] = [
		{
			title: "Email",
			type: "email",
			id: "email",
			name: "email",
			required: true,
			value: form?.email || ""
		},
		{
			title: "Password",
			type: "password",
			id: "password",
			name: "password",
			required: true,
			value: ""
		}
	];
</script>

<form method="POST" class="mt-8 mx-2 px-6 py-8 rounded-lg min-w-[300px]">
	<legend class="text-2xl font-[500]">Login</legend>
	{#each inputsProps as inputProps (inputProps.id)}
		<Input {inputProps} />
	{/each}
	<p class="text-sm mt-3">
		Not already have account? <a
			class="text-cyan-300 underline underline-offset-2 transition hover:text-cyan-400"
			href="/signup">Sign up.</a
		>
	</p>
	<button class="block ml-auto bg-cyan-600 mt-6 px-3 py-1 rounded-lg">Login</button>
</form>
