<script lang="ts">
	import Input from "$lib/components/Input.svelte";
	import type { InputProps } from "$lib/types";
	import type { ActionData } from "./$types";
	import { applyAction, enhance } from "$app/forms";

	export let form: ActionData;

	const inputsProps: InputProps[] = [
		{
			title: "Name",
			type: "text",
			id: "name",
			name: "name",
			required: true,
			value: form?.name || ""
		},
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
		},
		{
			title: "Confirm Password",
			type: "password",
			id: "passwordConfirm",
			name: "passwordConfirm",
			required: true,
			value: ""
		}
	];
</script>

<form method="POST" class=" mt-8 mx-2 px-6 py-8 rounded-lg min-w-[300px]">
	<legend class="text-2xl font-[500]">Sign up</legend>
	{#each inputsProps as inputProps (inputProps.id)}
		<Input {inputProps} />
	{/each}
	<p class="text-sm mt-3">
		Already have account? <a
			class="text-cyan-300 underline underline-offset-2 transition hover:text-cyan-400"
			href="/login">Log in.</a
		>
	</p>
	<button class="block ml-auto bg-cyan-600 mt-6 px-3 py-1 rounded-lg">Sign up</button>
</form>
