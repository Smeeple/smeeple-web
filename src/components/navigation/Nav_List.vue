<template>
    <li
        v-if="$route.path !== '/for-experts'"
        :class="{
            'md-max:hidden': parentClass === 'nav-header',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/for-experts" @click.native="$emit('nav-click')">Become an Expert</NuxtLink>
    </li>

    <li
        v-if="$route.path === '/for-experts'"
        :class="{
            'md-max:hidden': parentClass === 'nav-header',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/" @click.native="$emit('nav-click')">For consumers</NuxtLink>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <a class="transition-all duration-150 lg:hover:text-orange-light" href="/browse-experts">Find an Expert</a>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/about-smeeple" @click.native="$emit('nav-click')">About Smeeple</NuxtLink>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/faqs" @click.native="$emit('nav-click')">FAQs</NuxtLink>
    </li>

    <li
        :class="{
            hidden: parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <a class="transition-all duration-150 lg:hover:text-orange-light" href="https://us21.list-manage.com/contact-form?u=d80d185e796d0394c7aedcb86&form_id=c8ff58847bc83c0cb9b8335ee32bfa64" target="_blank">Contact us</a>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <a
            :class="{
                'border-0 bg-transparent p-0': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
                'place-content-start': parentClass === 'nav-footer',
                'justify-center text-32': parentClass === 'nav-mobile',
            }"
            class="cta-primary flex items-center"
            href="https://app.smeeple.com/sign-in"
            >Expert login</a
        >
    </li>
</template>

<script>
    import Header from '~/plugins/components/Header';

    export default {
        mixins: [Header],
        emits: ['nav-click'],
    };
</script>
