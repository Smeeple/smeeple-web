<script setup>
    import { useRoute } from 'vue-router';

    const { data: categories } = await useFetch('https://app.smeeple.com/api/v1.1/categories/mobile');
    const { data: experts } = await useFetch('https://app.smeeple.com/api/v1.1/experts/mobile');

    const sentenceCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const getCategoryName = (categoryId) => {
        return categories?.value?.find((c) => c.id === categoryId)?.name;
    };

    const route = useRoute();
    const slug = route.params.slug;
    const categoryName = sentenceCase(slug.replace(/and/g, '&').replace(/-/g, ' '));

    useHead({
        title: categoryName + ' | Browse Experts',
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
    <section class="flex items-center bg-blue-dark bg-[url('/assets/img/bg-shapes-blue.png')] md-max:-mt-[92px] md-max:pt-[132px] lg:-mt-[141px] lg:pt-[150px]">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 xl:col-span-10 xl:col-start-2">
                    <span class="block text-24 font-normal text-blue-light">Browse experts</span>

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

                    <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
                        <template :key="index" v-for="(category, index) in categories">
                            <template v-if="sentenceCase(category.name) === categoryName"
                                ><template :key="index" v-for="(expert, index) in experts">
                                    <template v-if="expert.categoryId === category.id">
                                        <a :href="'https://app.smeeple.com/experts/' + expert.profileLinkId" target="_blank" class="overflow-hidden rounded-lg shadow-lg">
                                            <div :style="{ backgroundImage: `url('${expert.photoUrl}')` }" class="card aspect-square rounded-tl-lg rounded-tr-lg bg-cover bg-center duration-300"></div>
                                            <div class="card-body w-full rounded-bl-lg rounded-br-lg bg-white px-2 py-1">
                                                <span class="block font-poppins text-14 leading-tight text-black sm:text-16 md:text-18">{{ sentenceCase(expert.firstName) }} {{ sentenceCase(expert.lastName) }}</span>
                                                <span v-if="expert.subCategoryIds.length > 0" class="block overflow-hidden text-ellipsis whitespace-nowrap font-poppins text-12 text-blue-light sm:text-14">{{ getCategoryName(expert.subCategoryIds[0]) }}</span>
                                                <span v-if="expert.subCategoryIds.length > 1" class="block overflow-hidden text-ellipsis whitespace-nowrap font-poppins text-12 text-blue-light sm:text-14">{{ getCategoryName(expert.subCategoryIds[1]) }}</span>
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
