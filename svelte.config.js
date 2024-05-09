// svelte.config.js
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    // Specify the adapter for deployment
    adapter: adapter(),

    // Other SvelteKit configurations
  },
  preprocess: preprocess()
};
