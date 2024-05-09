<script>
	import profilePic from "$lib/images/profile.png";
</script>

<header class="px-3 py-2 text-gray-200 drop-shadow-md flex items-center justify-between">
	<h1 class="font-bold font-unbounded text-2xl">Exp-T</h1>

	<button class="w-10 h-10 rounded-full border-2 border-gray-200">
		<img src={profilePic} alt="profile picture" />
	</button>
</header>

<div class="px-3 text-gray-200">
	<slot />
</div>
