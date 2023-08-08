<template>
    <li v-if="$route.path === '/for-experts'">
        <NuxtLink to="/">For consumers</NuxtLink>
    </li>

    <li v-if="$route.path !== '/for-experts'">
        <NuxtLink to="/for-experts">For experts</NuxtLink>
    </li>

    <li v-if="$route.path === '/for-experts'" class="mt-1">
        <NuxtLink to="https://app.smeeple.com/sign-in">Expert login</NuxtLink>
    </li>

    <li class="mt-1">
        <NuxtLink to="/about-us">About us</NuxtLink>
    </li>

    <li class="mt-1">
        <NuxtLink to="/support">Support</NuxtLink>
    </li>

    <li class="mt-1">
        <NuxtLink to="/contact-us">Contact us</NuxtLink>
    </li>
</template>
