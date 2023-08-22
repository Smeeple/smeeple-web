<script setup>
    definePageMeta({
        layout: 'interior',
    });
    useHead({
        title: 'FAQs',
        meta: [
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:url', content: '' },
        ],
        bodyAttrs: { class: 'faqs' },
    });
</script>

<template>
    <section class="bg-gray-light bg-[url('/assets/img/bg-shapes-gray.png')]">
        <div class="container">
            <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                    <h1 class="mb-0">Frequently asked questions</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                    <NuxtLink class="cta-tertiary">I'm a consumer</NuxtLink>

                    <NuxtLink class="cta-tertiary-outline">I'm an expert</NuxtLink>

                    <ul class="mb-3 list-none columns-2">
                        <li v-for="faq in faqs" :key="faq.id" class="mb-2">
                            <NuxtLink :to="'#question-' + faq.id">{{ faq.question }}</NuxtLink>
                        </li>
                    </ul>

                    <hr />

                    <div v-for="faq in faqs" :key="faq.id" :id="'question-' + faq.id" class="-mt-12 pt-12">
                        <h3 class="-mt-12 pt-12">{{ faq.question }}</h3>

                        <p v-html="faq.answer"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>

<script>
    import faqs from '~/assets/js/data/faqs.json';

    export default {
        data() {
            return {
                faqs,
            };
        },
    };
</script>
