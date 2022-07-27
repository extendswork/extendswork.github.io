import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import svg from '@poppanator/sveltekit-svg'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [svg({
				includePaths: ["./src/assets"],
				svgoOptions: {
					multipass: true,
					plugins: ["preset-default"],
				},
			})]
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

};

export default config;
