<script setup>
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
                <div class="sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h1 class="mb-0">Browse experts</h1>
                </div>
            </div>
        </div>
    </section>

    <Expert_Spotlight />

    <section class="pt-0">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h2>Categories</h2>

                    <h3>Business</h3>

                    <h3>Culinary</h3>

                    <h3>Digital media</h3>

                    <h3>Education</h3>

                    <h3>Fashion & beauty</h3>

                    <h3>Health & wellness</h3>

                    <h3>Home & design</h3>

                    <h3>Homesteading</h3>

                    <h3>Information technology</h3>

                    <h3>Lawn & garden</h3>

                    <h3>Music & audio production</h3>

                    <h3>Outdoors</h3>

                    <h3>Personal finance</h3>

                    <h3>Professional services</h3>

                    <h3>Sports</h3>

                    <h3>Trades & services</h3>

                    <h3>Travel</h3>

                    <h3>Vehicle & small engine</h3>
                </div>
            </div>
        </div>
    </section>
</template>
