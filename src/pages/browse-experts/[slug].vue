<script setup>
    import { useRoute } from 'vue-router';

    const { data: categories } = await useFetch('https://app.smeeple.com/api/v1.1/categories/mobile');
    const { data: experts } = await useFetch('https://app.smeeple.com/api/v1.1/experts/mobile');

    const sentenceCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const route = useRoute();
    const slug = route.params.slug;
    const categoryName = sentenceCase(slug.replace(/and/g, '&').replace(/-/g, ' '));

    useHead({
        title: categoryName + ' | Browse experts',
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
                <div class="sm:col-span-12 xl:col-span-10 xl:col-start-2">
                    <h4 class="mb-0 text-blue-light">Browse experts</h4>

                    <h1 class="mb-0">{{ categoryName }}</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="md-max:py-7">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 xl:col-span-10 xl:col-start-2">
                    <div class="text-center">
                        <h2 class="mb-8 inline-block -rotate-3 -skew-x-6 rounded-lg bg-green-light px-2 text-center text-white">Meet the experts</h2>
                    </div>

                    <div class="grid gap-3 sm:grid-cols-12">
                        <template :key="index" v-for="(category, index) in categories">
                            <template v-if="sentenceCase(category.name) === categoryName"
                                ><template :key="index" v-for="(expert, index) in experts">
                                    <template v-if="expert.categoryId === category.id">
                                        <a class="xs:col-span-12 overflow-hidden rounded-lg shadow-lg shadow-black/30 sm:col-span-6 lg:col-span-4 2xl:col-span-3" :href="'https://app.smeeple.com/experts/' + expert.profileLinkId" target="_blank">
                                            <div :style="{ backgroundImage: `url('${expert.photoUrl}')` }" class="card relative h-[360px] bg-cover bg-center shadow-lg shadow-black/30 duration-300">
                                                <div class="card-body absolute bottom-0 w-full bg-white/90 px-3 py-2">
                                                    <span class="block font-poppins text-18">{{ expert.firstName }} {{ expert.lastName }}</span>

                                                    <!-- <span class="font-poppins text-16 text-blue-light">{{ sentenceCase(expert.specialties[0].specialty) }}</span> -->
                                                </div>
                                            </div>
                                        </a>
                                    </template>
                                </template>
                            </template>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Categories />
</template>
