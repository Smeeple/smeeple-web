<script setup>
    const route = useRoute();
    const url = useRequestURL();
    const baseUrl = url.protocol + '//' + url.host;

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | Smeeple` : 'Smeeple';
        },
        bodyAttrs: {
            class: 'bg-blue-dark',
        },
        link: [
            {
                rel: 'canonical',
                href: `${baseUrl + route.path}`,
            },
        ],
    });
</script>

<template>
    <Header />

    <main class="bg-white bg-[url('/assets/img/bg-dot.png')]">
        <slot />
    </main>

    <Footer />
</template>
