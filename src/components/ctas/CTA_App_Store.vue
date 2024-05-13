<script setup>
    const runtimeConfig = useRuntimeConfig();
    const appleLink = runtimeConfig.public.appleLink;
</script>

<template>
    <a class="cta-primary transition-border border-white/20 bg-black leading-5 hover:border-white/50" :href="appleLink" target="_blank" rel="noopener noreferrer">
        <div class="flex items-center justify-center">
            <Icon_Apple class="mr-1 fill-white" />

            <div class="normal-case"><span class="block text-12">Download on the</span>App Store</div>
        </div>
    </a>
</template>
