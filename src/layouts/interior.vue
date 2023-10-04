<script setup>
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | Smeeple` : 'Smeeple';
        },
    });
</script>

<template>
    <Header parentClass="header-dark" />

    <slot />
</template>
