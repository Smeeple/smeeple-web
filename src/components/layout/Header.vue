<template>
    <div v-if="$root.hasClass">
        <Header_Dark />
    </div>

    <div v-else>
        <Header_Light />

        <p>Test</p>
    </div>
</template>

<script>
    export default {
        computed: {
            isPageDark() {
                // Access the $root data property to check if the "page-dark" class exists
                return this.$root.hasClass;
            },
        },
    };
</script>
