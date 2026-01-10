import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
	site: 'https://sacharya.dev',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'Soumyaranjan Acharya',
			openGraph: {
				home: {
					title: 'Spectre',
					description: 'A minimalistic theme for Astro.',
				},
				blog: {
					title: 'Blog',
					description: 'News and guides for Spectre.',
				},
				projects: {
					title: 'Projects',
				},
			},
			giscus: false,
		}),
	],
});

export default config;
