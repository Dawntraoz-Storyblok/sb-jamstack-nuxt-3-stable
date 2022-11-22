// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      {
				accessToken: 'QiiuldeZsletspIAOYLeSwtt',
			}
    ],
	  '@nuxtjs/tailwindcss'
  ],
})
