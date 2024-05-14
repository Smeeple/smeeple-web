<script setup>
    const { data: categories } = await useFetch('https://app.smeeple.com/api/v1.1/categories/mobile');

    const sentenceCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
</script>

<template>
    <section class="pt-0 md-max:pb-7">
        <div class="container mx-auto max-w-[1200px]">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 xl:col-span-10 xl:col-start-2">
                    <div class="text-center">
                        <h2 class="my-6 inline-block -rotate-3 -skew-x-6 rounded-lg bg-green-light px-2 text-center text-white">Categories</h2>
                    </div>

                    <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
                        <template :key="index" v-for="(category, index) in categories">
                            <template v-if="category.type === 'Main' && category.expertCount > 0 && category.consumerBookingActive === true">
                                <a class="aspect-square overflow-hidden rounded-lg shadow-lg shadow-black/30" :href="'/browse-experts/' + category.name.replace(/&/g, 'and').replace(/\s/g, '-').toLowerCase()">
                                    <div :style="{ backgroundImage: `url('${category.image}')` }" class="card relative h-full bg-cover bg-center shadow-lg shadow-black/30 duration-300">
                                        <div class="card-body absolute bottom-0 w-full bg-white/90 px-2 py-1">
                                            <span class="block font-poppins text-14 leading-tight text-black sm:text-16 md:text-18">{{ sentenceCase(category.name) }}</span>

                                            <span class="block font-poppins text-12 text-blue-light sm:text-14">{{ category.expertCount }} experts</span>
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
