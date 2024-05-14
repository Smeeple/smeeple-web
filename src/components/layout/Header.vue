<template>
    <header
        :class="{
            'bg-blue': isPageScrolled,
        }"
        class="fixed top-0 z-50 w-full transition-all duration-300">
        <div class="container py-2">
            <div class="flex min-h-[52px] items-center justify-between">
                <NuxtLink to="/">
                    <Logo_Smeeple parentClass="logo-light" />
                </NuxtLink>

                <nav>
                    <ul class="nav-list flex list-none items-center text-white">
                        <Nav_List parentClass="nav-header" />
                    </ul>
                </nav>

                <div
                    :class="{
                        'nav-toggle-open': isMobileNavOpen,
                    }"
                    class="nav-toggle lg:hidden">
                    <Icon_Menu @click="toggleMobileNav" parentClass="icon-light" />
                </div>
            </div>
        </div>
    </header>

    <Nav_Mobile
        @nav-click="closeMobileNav"
        :class="{
            '-right-[991px]': !isMobileNavOpen,
            'right-0': isMobileNavOpen,
        }" />
</template>

<script>
    import Header from '~/plugins/components/Header';

    export default {
        data() {
            return {
                isPageScrolled: false,
            };
        },
        methods: {
            checkScrollPosition() {
                let scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

                this.isPageScrolled = scrollPosition > 0;
            },
        },
        mixins: [Header],
        mounted() {
            // isPageScrolled
            this.checkScrollPosition();

            window.addEventListener('scroll', this.checkScrollPosition);
        },
        watch: {
            $route() {
                this.closeMobileNav();
            },
        },
    };
</script>
