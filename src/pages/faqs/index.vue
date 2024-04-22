<script setup>
    useHead({
        title: 'FAQs',
        meta: [
            { name: 'description', content: 'What Smeeple consumers and experts have asked us? | Your Personalized Solution Hub with Expert Guidance for Every Challenge | FAQs' },
            { name: 'keywords', content: 'FAQ, FAQs, Expert advice, Personalized solutions, Tailored guidance, Live connection, Customized solutions, Human expert, Specific situation, Dependable advice, Wide variety of fields, User-friendly platform' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:url', content: '' },
        ],
    });
</script>

<template>
    <section class="flex items-center bg-blue-dark bg-[url('/assets/img/bg-shapes-blue.png')] md-max:-mt-[92px] md-max:pt-[132px] lg:-mt-[141px] lg:pt-[150px]">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 xl:col-span-10 xl:col-start-2">
                    <h1 class="mb-0">Frequently asked questions</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <div class="cta-group mb-3 mt-0 flex justify-center">
                        <button @click="tab = 'consumers'" :class="tab === 'consumers' ? 'cta-tertiary' : 'cta-tertiary-outline'" class="rounded-br-none rounded-tr-none">For consumers</button>

                        <button @click="tab = 'experts'" :class="tab === 'experts' ? 'cta-tertiary' : 'cta-tertiary-outline'" class="ml-0 mt-0 rounded-bl-none rounded-tl-none">For experts</button>
                    </div>

                    <div :class="tab === 'consumers' ? '' : 'hidden'">
                        <h2 class="text-center">What consumers have asked us...</h2>

                        <ul class="mt-3 list-none overflow-hidden rounded-lg border border-gray">
                            <li
                                @click="toggleAccordion(faq.id)"
                                v-for="faq in faqsConsumers"
                                :key="faq.id"
                                :class="{
                                    'border-l-[3px] border-l-green-light bg-white': openAccordion === faq.id,
                                    'bg-gray-lighter': openAccordion !== faq.id,
                                }"
                                class="mb-0 cursor-pointer border-t border-gray first:border-t-0 md-max:py-2 md-max:pl-[44px] md-max:pr-2 lg:py-3 lg:pl-[54px] lg:pr-3">
                                <div class="grid grid-cols-12">
                                    <div class="col-span-11">
                                        <h3
                                            :class="{
                                                '-ml-[3px]': openAccordion === faq.id,
                                            }"
                                            class="mb-0 -indent-[24px] font-poppins text-20 font-normal text-black">
                                            <span class="font-poppins text-orange-light">Q:</span> {{ faq.question }}
                                        </h3>
                                    </div>

                                    <div class="col-span-1 flex items-center justify-end">
                                        <Icon_Minus v-if="openAccordion === faq.id" />

                                        <Icon_Plus v-else w />
                                    </div>
                                </div>

                                <div v-if="openAccordion === faq.id" :style="{ height: openAccordion === faq.id ? 'auto' : '0', opacity: openAccordion === faq.id ? '1' : '0' }" class="mt-2 transition-all duration-300">
                                    <p
                                        :class="{
                                            '-ml-[3px]': openAccordion === faq.id,
                                        }"
                                        class="-indent-[24px]">
                                        <span class="font-poppins text-orange-light">A:</span> <span v-html="faq.answer"></span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div :class="tab === 'experts' ? '' : 'hidden'">
                        <h2 class="text-center">What experts have asked us...</h2>

                        <ul class="mt-3 list-none overflow-hidden rounded-lg border border-gray">
                            <li
                                @click="toggleAccordion(faq.id)"
                                v-for="faq in faqsExperts"
                                :key="faq.id"
                                :class="{
                                    'border-l-[3px] border-l-green-light bg-white': openAccordion === faq.id,
                                    'bg-gray-lighter': openAccordion !== faq.id,
                                }"
                                class="mb-0 cursor-pointer border-t border-gray first:border-t-0 md-max:py-2 md-max:pl-[44px] md-max:pr-2 lg:py-3 lg:pl-[54px] lg:pr-3">
                                <div class="grid grid-cols-12">
                                    <div class="col-span-11">
                                        <h3
                                            :class="{
                                                '-ml-[3px]': openAccordion === faq.id,
                                            }"
                                            class="mb-0 -indent-[24px] font-poppins text-20 font-normal text-black">
                                            <span class="font-poppins text-orange-light">Q:</span> {{ faq.question }}
                                        </h3>
                                    </div>

                                    <div class="col-span-1 flex items-center justify-end">
                                        <Icon_Minus v-if="openAccordion === faq.id" />

                                        <Icon_Plus v-else w />
                                    </div>
                                </div>

                                <div v-if="openAccordion === faq.id" :style="{ height: openAccordion === faq.id ? 'auto' : '0', opacity: openAccordion === faq.id ? '1' : '0' }" class="mt-2 transition-all duration-300">
                                    <p
                                        :class="{
                                            '-ml-[3px]': openAccordion === faq.id,
                                        }"
                                        class="-indent-[24px]">
                                        <span class="font-poppins text-20 text-orange-light">A:</span> <span v-html="faq.answer"></span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="cta-group mt-4 flex justify-center">
                        <button @click="tab = 'consumers'" :class="tab === 'consumers' ? 'cta-tertiary' : 'cta-tertiary-outline'" class="rounded-br-none rounded-tr-none">For consumers</button>

                        <button @click="tab = 'experts'" :class="tab === 'experts' ? 'cta-tertiary' : 'cta-tertiary-outline'" class="ml-0 mt-0 rounded-bl-none rounded-tl-none">For experts</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import faqsConsumers from '~/assets/js/data/faqs-consumers.json';
    import faqsExperts from '~/assets/js/data/faqs-experts.json';

    export default {
        data() {
            return {
                faqsConsumers,
                faqsExperts,
                openAccordion: null,
                tab: 'consumers',
            };
        },
        methods: {
            toggleAccordion(id) {
                this.openAccordion = this.openAccordion === id ? null : id;
            },
        },
    };
</script>
