<script setup>
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | Smeeple` : 'Smeeple';
        },
        bodyAttrs: {
            class: 'bg-[url("/assets/img/bg-dot.png")]',
        },
    });
</script>

<template>
    <Header />
    <slot />

    <Footer />
</template>
