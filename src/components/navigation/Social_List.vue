<template>
    <ul class="mt-3 list-none">
        <li class="inline-block sm-max:mr-2 md:mr-2">
            <NuxtLink to="https://facebook.com/SmeepleApp" target="_blank">
                <Icon_Facebook
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </NuxtLink>
        </li>

        <li class="inline-block sm-max:mr-2 md:mr-2">
            <NuxtLink to="https://instagram.com/SmeepleApp" target="_blank">
                <Icon_Instagram
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </NuxtLink>
        </li>

        <li class="inline-block sm-max:mr-2 md:mr-2">
            <NuxtLink to="https://x.com/SmeepleApp" target="_blank">
                <Icon_X
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </NuxtLink>
        </li>

        <li class="inline-block sm-max:mr-2 md:mr-2">
            <NuxtLink to="https://tiktok.com/@SmeepleApp" target="_blank">
                <Icon_TikTok
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </NuxtLink>
        </li>

        <li class="inline-block sm-max:mr-2 md:mr-2">
            <NuxtLink to="https://youtube.com/@SmeepleApp" target="_blank">
                <Icon_YouTube
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </NuxtLink>
        </li>

        <li class="inline-block">
            <NuxtLink to="https://linkedin.com/company/smeeple" target="_blank">
                <Icon_LinkedIn
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </NuxtLink>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            parentClass: String,
        },
    };
</script>
