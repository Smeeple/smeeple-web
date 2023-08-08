<script setup>
    useHead({
        title: 'For experts',
        meta: [
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:url', content: '' },
        ],
        bodyAttrs: { class: 'experts' },
    });
</script>

<template>
    <Header_Light />

    <section>
        <div class="container">
            <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                    <h1>For experts</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>
