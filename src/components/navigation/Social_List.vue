<template>
    <ul class="mt-3 list-none">
        <li class="inline-block sm-max:mr-2 md:mr-2">
            <a href="https://facebook.com/SmeepleApp" target="_blank">
                <Icon_Facebook
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </a>
        </li>

        <li class="inline-block sm-max:mr-2 md:mr-2">
            <a href="https://instagram.com/SmeepleApp" target="_blank">
                <Icon_Instagram
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </a>
        </li>

        <!-- <li class="inline-block sm-max:mr-2 md:mr-2">
            <a href="https://x.com/SmeepleApp" target="_blank">
                <Icon_X
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </a>
        </li> -->

        <!-- <li class="inline-block sm-max:mr-2 md:mr-2">
            <a href="https://tiktok.com/@SmeepleApp" target="_blank">
                <Icon_TikTok
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </a>
        </li> -->

        <li class="inline-block sm-max:mr-2 md:mr-2">
            <a href="https://youtube.com/@SmeepleApp" target="_blank">
                <Icon_YouTube
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </a>
        </li>

        <li class="inline-block">
            <a href="https://linkedin.com/company/smeeple" target="_blank">
                <Icon_LinkedIn
                    :class="{
                        'fill-blue-light hover:fill-blue-lighter': parentClass === 'icons-blue',
                        'fill-green-light hover:fill-green-lighter': parentClass === 'icons-green',
                        'fill-orange-light hover:fill-orange-lighter': parentClass === 'icons-orange',
                    }"
                    class="transition-all duration-300" />
            </a>
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
