<template>
    <div class="relative top-[3px] rotate-180 hover:cursor-pointer">
        <span
            v-for="index in 3"
            :key="index"
            :class="{
                'bg-blue': parentClass === 'icon-dark' && !isHeaderBgBlue && !isMobileNavOpen,
                'bg-white': parentClass === 'icon-light' || isHeaderBgBlue || isMobileNavOpen,
            }"
            class="nav-toggle-bar block transition-all duration-300"></span>
    </div>
</template>

<script>
    export default {
        props: {
            isHeaderBgBlue: Boolean,
            isMobileNavOpen: Boolean,
            parentClass: String,
        },
    };
</script>
