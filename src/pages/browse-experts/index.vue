<script setup>
    useHead({
        title: 'Find an Expert',
        meta: [
            { name: 'description', content: 'Meet Our Top Experts: Get Personalized Assistance Tailored to Your Needs with Smeeple!' },
            { name: 'keywords', content: 'smeeple, experts, people, knowledge, skills,  insight, download, expert, book' },
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
                    <h1 class="mb-0">Find an Expert</h1>
                </div>
            </div>
        </div>
    </section>

    <Categories />
</template>
