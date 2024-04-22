<script setup>
    const props = defineProps({
        error: Object,
    });

    const handleError = () => clearError({ redirect: '/' });

    useHead({
        title: `${props.error.statusCode} - ${props.error.statusMessage.split(':')[0]} | Smeeple`,
        meta: [
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:url', content: '' },
        ],
        bodyAttrs: {
            class: 'bg-blue-dark',
        },
    });
</script>

<template>
    <Header />

    <section class="flex h-screen items-center bg-[url('/assets/img/bg-shapes-blue.png')] text-white md-max:-mt-[92px] md-max:pt-[132px] lg:-mt-[141px] lg:pt-[150px]">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 xl:col-span-10 xl:col-start-2">
                    <span class="block text-24 font-normal text-blue-light">{{ error.statusCode }}</span>

                    <h1 class="mb-3">{{ error.statusMessage.split(':')[0] }}</h1>

                    <div v-if="error.statusCode === 404">
                        <p>Uh oh! 😲 It appears the page you were trying to reach has disappeared into the digital void.</p>

                        <p>Click <a class="cursor-pointer" @click="handleError">here</a> to get back on track. 😎</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>
