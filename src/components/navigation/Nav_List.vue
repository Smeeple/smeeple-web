<template>
    <li v-if="$route.path !== '/for-experts'" :class="{ 'md-max:hidden': parentClass.startsWith('nav-header') }">
        <NuxtLink :class="{ 'text-white': parentClass === 'nav-header-light' || isHeaderFixed, 'text-blue': parentClass === 'nav-header-dark' }" class="transition-all duration-150 lg:hover:text-orange-light" to="/for-experts">For experts</NuxtLink>
    </li>

    <li v-if="$route.path === '/for-experts'" :class="{ 'md-max:hidden': parentClass.startsWith('nav-header') }">
        <NuxtLink :class="{ 'text-white': parentClass === 'nav-header-light' || isHeaderFixed, 'text-blue': parentClass === 'nav-header-dark' }" class="transition-all duration-150 lg:hover:text-orange-light" to="/">For consumers</NuxtLink>
    </li>

    <li :class="{ 'ml-4 md-max:hidden': parentClass.startsWith('nav-header'), 'mt-1': parentClass.startsWith('nav-footer') || parentClass === 'nav-mobile' }">
        <NuxtLink :class="{ 'text-white': parentClass === 'nav-header-light' || isHeaderFixed, 'text-blue': parentClass === 'nav-header-dark' }" class="transition-all duration-150 lg:hover:text-orange-light" to="/about-smeeple">About Smeeple</NuxtLink>
    </li>

    <li :class="{ 'ml-4 md-max:hidden': parentClass.startsWith('nav-header'), 'mt-1': parentClass.startsWith('nav-footer') || parentClass === 'nav-mobile' }">
        <NuxtLink :class="{ 'text-white': parentClass === 'nav-header-light' || isHeaderFixed, 'text-blue': parentClass === 'nav-header-dark' }" class="transition-all duration-150 lg:hover:text-orange-light" to="/faqs">FAQs</NuxtLink>
    </li>

    <li :class="{ 'ml-4 md-max:hidden': parentClass.startsWith('nav-header'), 'mt-1': parentClass.startsWith('nav-footer') || parentClass === 'nav-mobile' }">
        <NuxtLink :class="{ 'text-white': parentClass === 'nav-header-light' || isHeaderFixed, 'text-blue': parentClass === 'nav-header-dark' }" class="transition-all duration-150 lg:hover:text-orange-light" to="/support">Support</NuxtLink>
    </li>

    <li :class="{ 'ml-4 md-max:hidden': parentClass.startsWith('nav-header'), 'mt-1': parentClass.startsWith('nav-footer') || parentClass === 'nav-mobile' }">
        <NuxtLink :class="{ 'text-white': parentClass === 'nav-header-light' || isHeaderFixed, 'text-blue': parentClass === 'nav-header-dark' }" class="transition-all duration-150 lg:hover:text-orange-light" to="/contact-us">Contact us</NuxtLink>
    </li>

    <li v-if="parentClass.startsWith('nav-header') && $route.path === '/for-experts'" :class="{ 'ml-4 md-max:hidden': parentClass.startsWith('nav-header') }">
        <NuxtLink class="cta-primary flex items-center" to="https://app.smeeple.com/sign-in">
            <Icon_Locked class="mr-1 fill-white" />

            Expert login
        </NuxtLink>
    </li>
</template>

<script>
    import Header from '~/plugins/components/Header';

    export default {
        mixins: [Header],
    };
</script>
