<script setup>
    import { useRoute } from 'vue-router';

    const { data: experts } = await useFetch('https://app.smeeple.com/api/v1.1/experts/mobile?categoryId=1');
    const route = useRoute();
    const slug = route.params.slug;
    const toSentenceCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    useHead({
        title: toSentenceCase(slug.replace(/and/g, '&').replace(/-/g, ' ')) + ' | Browse experts',
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
    <section class="relative flex items-center bg-blue-dark bg-[url('/assets/img/bg-shapes-blue.png')] md-max:-mt-[92px] md-max:pt-[132px] lg:-mt-[141px] lg:pt-[221px]">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h4 class="mb-0 text-blue-light">Browse experts</h4>

                    <h1 class="mb-0">{{ toSentenceCase(slug.replace(/and/g, '&').replace(/-/g, ' ')) }}</h1>
                </div>
            </div>
        </div>
    </section>
</template>
