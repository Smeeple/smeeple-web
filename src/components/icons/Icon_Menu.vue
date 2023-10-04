<template>
    <div class="relative -top-[12px] h-[40px] w-[40px] rotate-180 hover:cursor-pointer">
        <span
            v-for="index in 3"
            :key="index"
            :class="{
                'bg-blue': parentClass === 'icon-dark' && !isHeaderFixed && !isMobileNavOpen,
                'bg-white': parentClass === 'icon-light' || isHeaderFixed || isMobileNavOpen,
            }"
            class="nav-toggle-bar block transition-all duration-300"></span>
    </div>
</template>

<script>
    export default {
        props: {
            isHeaderFixed: Boolean,
            isMobileNavOpen: Boolean,
            parentClass: String,
        },
    };
</script>
