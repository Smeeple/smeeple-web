<script setup>
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | Smeeple` : 'Smeeple';
        },
        bodyAttrs: {
            class: 'bg-blue-dark hidden',
        },
    });
</script>

<template>
    <Header />

    <main class="bg-white bg-[url('/assets/img/bg-dot.png')]">
        <slot />
    </main>

    <Footer />
</template>
