<script setup>
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | Smeeple` : 'Smeeple';
        },
        bodyAttrs: {
            class: 'bg-white bg-[url("/assets/img/bg-dot.png")] bg-bottom',
        },
    });
</script>

<template>
    <Header parentClass="header-light" />

    <slot />
</template>
