<script setup>
    useHead({
        script: [{ src: 'assets/js/components/Header.js', tagPosition: 'bodyClose' }],
    });
</script>

<template>
    <header class="fixed top-0 z-50 w-full transition-all duration-300">
        <Header_Banner />

        <div class="container py-2">
            <div class="flex min-h-[52px] items-center justify-between">
                <NuxtLink to="/">
                    <Logo_Smeeple v-if="parentClass === 'header-light'" parentClass="logo-light" />

                    <Logo_Smeeple v-else-if="parentClass === 'header-dark'" :isHeaderBgBlue="isHeaderBgBlue" :isMobileNavOpen="isMobileNavOpen" parentClass="logo-dark" />
                </NuxtLink>

                <nav>
                    <ul class="nav-list flex list-none items-center">
                        <Nav_List v-if="parentClass === 'header-light'" parentClass="nav-header-light" />

                        <Nav_List v-else-if="parentClass === 'header-dark'" parentClass="nav-header-dark" />
                    </ul>
                </nav>

                <div :class="{ 'nav-toggle-open': isMobileNavOpen }" class="nav-toggle lg:hidden">
                    <Icon_Menu v-if="parentClass === 'header-light'" @click="toggleMobileNav" parentClass="icon-light" />

                    <Icon_Menu v-else-if="parentClass === 'header-dark'" :isHeaderBgBlue="isHeaderBgBlue" :isMobileNavOpen="isMobileNavOpen" @click="toggleMobileNav" parentClass="icon-dark" />
                </div>
            </div>
        </div>
    </header>

    <Nav_Mobile :class="{ '-right-[991px]': !isMobileNavOpen, 'right-0': isMobileNavOpen }" />
</template>

<script>
    import Header from '~/plugins/components/Header';

    export default {
        mixins: [Header],
    };
</script>
