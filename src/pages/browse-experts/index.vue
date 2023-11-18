<script setup>
    const { data: categories } = await useFetch('https://app.smeeple.com/api/v1.1/categories/mobile');
    const toSentenceCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    useHead({
        title: 'Browse experts',
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
                <div class="sm:col-span-12 lg:col-span-10 lg:col-start-2">
                    <h1 class="mb-0">Browse experts</h1>
                </div>
            </div>
        </div>
    </section>

    <Expert_Spotlight />

    <section class="pt-0 md-max:pb-7">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 xl:col-span-10 xl:col-start-2">
                    <div class="text-center">
                        <h2 class="mb-8 inline-block -rotate-3 -skew-x-6 rounded-lg bg-green-light px-2 text-center text-white">Categories</h2>
                    </div>

                    <div class="grid gap-3 sm:grid-cols-12">
                        <template :key="index" v-for="(category, index) in categories">
                            <template v-if="category.type === 'Main' && category.expertCount > 0 && category.consumerBookingActive === true">
                                <a class="overflow-hidden rounded-lg shadow-lg shadow-black/30 sm:col-span-12 md:col-span-6 lg:col-span-4" :href="'/browse-experts/' + category.name.replace(/&/g, 'and').replace(/\s/g, '-').toLowerCase()">
                                    <div :style="{ backgroundImage: `url('${category.image}')` }" class="card relative h-[240px] bg-cover bg-center shadow-lg shadow-black/30 duration-300">
                                        <div class="card-body absolute bottom-0 w-full bg-white/90 px-3 py-2">
                                            <span class="block font-poppins text-18">{{ toSentenceCase(category.name) }}</span>

                                            <span class="font-poppins text-16 text-blue-light">{{ category.expertCount }} experts</span>
                                        </div>
                                    </div>
                                </a>
                            </template>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
