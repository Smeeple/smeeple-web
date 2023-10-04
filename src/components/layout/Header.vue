<template>
    <header
        :class="{
            'bg-blue': isPageScrolled,
            'bg-white': parentClass === 'header-dark' && !isPageScrolled && !isMobileNavOpen,
        }"
        class="fixed top-0 z-50 w-full transition-all duration-300">
        <Header_Banner />

        <div class="container py-2">
            <div class="flex min-h-[52px] items-center justify-between">
                <NuxtLink to="/">
                    <Logo_Smeeple v-if="parentClass === 'header-light'" parentClass="logo-light" />

                    <Logo_Smeeple v-else-if="parentClass === 'header-dark'" :isHeaderFixed="isHeaderFixed" :isMobileNavOpen="isMobileNavOpen" parentClass="logo-dark" />
                </NuxtLink>

                <nav>
                    <ul class="nav-list flex list-none items-center">
                        <Nav_List v-if="parentClass === 'header-light'" parentClass="nav-header-light" />

                        <Nav_List v-else-if="parentClass === 'header-dark'" parentClass="nav-header-dark" />
                    </ul>
                </nav>

                <div
                    :class="{
                        'nav-toggle-open': isMobileNavOpen,
                    }"
                    class="nav-toggle lg:hidden">
                    <Icon_Menu @click="toggleMobileNav" v-if="parentClass === 'header-light'" parentClass="icon-light" />

                    <Icon_Menu @click="toggleMobileNav" v-else-if="parentClass === 'header-dark'" :isHeaderFixed="isHeaderFixed" :isMobileNavOpen="isMobileNavOpen" parentClass="icon-dark" />
                </div>
            </div>
        </div>
    </header>

    <Nav_Mobile
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
    };
</script>
