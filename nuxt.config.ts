// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'author', content: 'Site author' },
                { name: 'copyright', content: 'Site copyright' },
                { property: 'og:locale', content: 'en_US' },
                { property: 'og:type', content: 'website' },
                { property: 'og:image', content: '' }
            ],
            link: [
                { rel: 'icon', href: 'favicon.ico' }
            ],
            bodyAttrs: { class: 'md-max:pt-[92px] lg:pt-[141px]' }
        }
    },
    css: [ 'assets/scss/styles.scss' ],
    components: [
        '~/components',
        { path: '~/components/ctas', pathPrefix: false },
        { path: '~/components/icons', pathPrefix: false },
        { path: '~/components/layout', pathPrefix: false },
        { path: '~/components/logos', pathPrefix: false },
        { path: '~/components/navigation', pathPrefix: false }
    ],
    postcss: {
        plugins: {
            autoprefixer: {},
            tailwindcss: {},
            'tailwindcss/nesting': {}
        }
    },
    spaLoadingTemplate: false,
    srcDir: 'src/',
    ssr: false
});
