<template>
    <li
        v-if="$route.path !== '/for-experts'"
        :class="{
            'md-max:hidden': parentClass === 'nav-header',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/for-experts">For experts</NuxtLink>
    </li>

    <li
        v-if="$route.path === '/for-experts'"
        :class="{
            'md-max:hidden': parentClass === 'nav-header',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/">For consumers</NuxtLink>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/browse-experts">Browse experts</NuxtLink>
    </li>

    <li
        :class="{
            hidden: parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/about-smeeple">About Smeeple</NuxtLink>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/faqs">FAQs</NuxtLink>
    </li>

    <!-- <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/support">Support</NuxtLink>
    </li> -->

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/contact-us">Contact us</NuxtLink>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <NuxtLink
            :class="{
                'border-0 bg-transparent p-0': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
                'place-content-start': parentClass === 'nav-footer',
                'justify-center text-32': parentClass === 'nav-mobile',
            }"
            class="cta-primary flex items-center"
            to="https://app.smeeple.com/sign-in">
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
