<script setup>
    definePageMeta({
        layout: 'contact-us',
    });

    useHead({
        title: 'Contact us',
        meta: [
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:url', content: '' },
        ],
    });
</script>

<template>
    <div class="rounded-lg">
        <h3 class="text-orange-light">Thank you for reaching out</h3>

        <p>Your message has been received. We will review and respond to it shortly. Your feedback is important to us, as it helps us improve.</p>

        <div class="mt-3 flex justify-start">
            <a class="cta-tertiary flex items-center" href="/contact-us"><Icon_Chevron_Left class="mr-1" />Go back</a>
        </div>
    </div>
</template>
