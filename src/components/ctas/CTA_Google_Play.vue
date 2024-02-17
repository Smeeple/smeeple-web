<script setup>
    const runtimeConfig = useRuntimeConfig();
    const googlePlayLink = runtimeConfig.public.googlePlayLink;
</script>

<template>
    <a class="cta-primary leading-5" :href="googlePlayLink" target="_blank" rel="noopener noreferrer">
        <div class="flex items-center justify-center">
            <Icon_Google_Play class="mr-1 fill-white" />

            <div class="normal-case"><span class="block text-12">Get it on</span> Google Play</div>
        </div>
    </a>
</template>
