<template>
    <div class="relative -top-[12px] rotate-180 hover:cursor-pointer w-[40px] h-[40px]">
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
