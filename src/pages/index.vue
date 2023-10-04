<script setup>
    import How_It_Works from '~/components/layout/How_It_Works.vue';

    useHead({
        title: 'Connecting subject matter experts + people',
        meta: [
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:url', content: '' },
        ],
        bodyAttrs: {
            class: 'home bg-[url("/assets/img/bg-dot.png")] bg-bottom',
        },
    });
</script>

<template>
    <section class="relative -mt-[141px] flex items-center bg-blue-dark bg-[url('/assets/img/bg-shapes-blue.png')] md-max:pb-0 lg:py-12">
        <div class="container sm-max:pb-6 sm-max:pt-10 md:py-12 md-max:mt-5 lg:mt-8">
            <div class="sm:grid sm:grid-cols-12 xl:items-center xl:gap-9 2xl:gap-12">
                <div class="sm:col-span-12 xl:col-span-6">
                    <h1 class="mb-0 pb-2 leading-none text-white sm-max:text-40 md:text-[60px] lg:text-[72px]">Connecting <span class="font-medium text-blue-light">subject</span> <span class="font-medium text-green-light">matter</span> <span class="font-medium text-orange-light">experts</span> + people</h1>

                    <p class="mt-3 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                    <div class="cta-group mt-5 lg-max:hidden">
                        <CTA_App_Store />

                        <CTA_Google_Play />
                    </div>
                </div>

                <div class="sm:col-span-12 lg-max:mt-5 xl:col-span-6">
                    <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg pt-[56.25%]">
                        <iframe class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full" src="https://www.youtube-nocookie.com/embed/uTDq7gLUxn0?mode=opaque&rel=0&autohide=1&showinfo=0&wmode=transparent" title="Where can I get personalized help on any subject?" allowfullscreen></iframe>
                    </div>

                    <div class="cta-group mt-6 xl:hidden">
                        <CTA_App_Store />

                        <CTA_Google_Play />
                    </div>
                </div>
            </div>
        </div>

        <div class="scroll-indicator lg-max:hidden">
            <span class="scroll-mouse">
                <span class="scroll-wheel"></span>
            </span>
        </div>
    </section>

    <How_It_Works />

    <Expert_Spotlight />

    <Newsletter_Signup />

    <Footer />
</template>
