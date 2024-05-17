<script setup>
    const runtimeConfig = useRuntimeConfig();
    const googlePlayLink = runtimeConfig.public.googlePlayLink;
    const appleLink = runtimeConfig.public.appleLink;

    useHead({
        title: 'Get advice from Experts',
        meta: [
            { name: 'description', content: 'Smeeple is Connecting people to subject matter experts, through 1:1 video sessions, to gain knowledge, skills, and insight.' },
            { name: 'keywords', content: 'smeeple, experts, people, knowledge, skills,  insight, download, expert, book' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:url', content: '' },
        ],
    });
</script>

<template>
    <section class="relative -mt-[141px] flex items-center bg-blue-dark bg-[url('/assets/img/bg-shapes-blue.png')] pb-0 text-white">
        <div class="container sm-max:pb-6 sm-max:pt-10 md:py-8 md-max:mt-6">
            <div class="sm:grid sm:grid-cols-12 xl:items-center xl:gap-9 2xl:gap-12">
                <div class="sm:col-span-12 xl:col-span-6">
                    <h1 class="mb-0 pb-2 sm-max:text-40 sm-max:leading-[1.2] md:text-[60px] md:leading-none lg:text-[72px] xl:text-[60px] 2xl:text-[72px]">Get advice<br />from Experts</h1>

                    <p class="mt-3">Skip the generic online videos &mdash; get personalized, expert advice. Connect 1:1 with top professionals in sports, HVAC, gardening, fitness, and more through live video calls.</p>

                    <div class="my-2 flex flex-col gap-2 sm:flex-row">
                        <NuxtLink class="cta-primary bg-transparent" to="/for-experts">Become an Expert</NuxtLink>
                        <a class="cta-secondary" href="/browse-experts">Find an Expert</a>
                    </div>
                </div>

                <div class="mt-3 sm:col-span-12 lg-max:mt-5 lg:lg-max:flex lg:lg-max:flex-col lg:lg-max:justify-center xl:col-span-6">
                    <div>
                        <img src="/assets/img/expert-grid-final.png" alt="Smeeple Experts" class="mx-auto h-auto w-full max-w-[750px]" />
                    </div>

                    <div class="mt-4 flex flex-col items-center justify-center gap-1 sm:flex-row">
                        <CTA_App_Store />

                        <CTA_Google_Play />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="sm-max:pb-2 sm:md-max:pt-6 lg:pb-0">
        <div class="container">
            <div class="grid text-center xs-max:gap-y-4 sm:grid-cols-12 sm:gap-y-6 lg:gap-6 2xl:gap-12">
                <div class="flex flex-col items-center sm:col-span-12 lg:col-span-4">
                    <Icon_People class="mb-2 fill-transparent stroke-orange-light stroke-[3px]" />

                    <h3 class="mb-3">250+ vetted experts</h3>

                    <p>Discover experts from a wide variety of fields, book and pay for appointments, and conduct 1:1 video sessions &mdash; all right from within the Smeeple app.</p>
                </div>

                <div class="flex flex-col items-center sm:col-span-12 lg:col-span-4">
                    <Icon_Calendar class="mb-2 fill-transparent stroke-orange-light stroke-[3px]" />

                    <h3 class="mb-3">Your schedule</h3>

                    <p>Whether as soon as possible, or a Friday evening with a glass of wine in-hand, select an availability that works best for you and your schedule.</p>
                </div>

                <div class="flex flex-col items-center sm:col-span-12 lg:col-span-4">
                    <Icon_Chat class="mb-2 fill-transparent stroke-orange-light stroke-[3px]" />

                    <h3 class="mb-3">Get expertise</h3>

                    <p>Enhance your skills and master your craft with personalized expertise across 20+ categories, offering mentorship and guidance.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="sm-max:pb-0 sm-max:pt-6 md:pb-3">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="col-span-12 text-center">
                    <h2 class="inline-block -rotate-3 -skew-x-6 rounded-lg bg-green-light px-2 text-white xs-max:mb-4 sm:mb-0">How it works</h2>
                </div>

                <div class="bg-bottom bg-no-repeat sm:col-span-12 sm-max:py-4 md:bg-[url('/assets/img/bg-step-1.png')] md:py-8 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <div class="grid -rotate-2 md:grid-cols-12 md:gap-3">
                        <div class="sm-max:order-2 md:col-span-6">
                            <div class="relative xs-max:w-[310px] sm:w-[360px] sm-max:mx-auto">
                                <img class="absolute -z-10 xs-max:left-[14px] xs-max:w-[285px] md:hidden sm:md-max:left-[16px] sm:md-max:top-[1px] sm:md-max:w-[331px]" src="/assets/img/video-find-an-expert.png" alt="Find an expert" />

                                <video :autoplay="autoplay" class="absolute -z-10 shadow-2xl shadow-black sm:left-[20px] sm:top-[15px] sm-max:hidden" src="/assets/video/find-an-expert.mp4" loop muted></video>

                                <img src="/assets/img/img-iphone-frame.png" alt="iPhone frame" />
                            </div>
                        </div>

                        <div class="sm-max:order-1 sm-max:mb-4 sm-max:text-center md:col-span-6 md:pt-4">
                            <div class="mb-3 md:-ml-6 md:flex md:items-end">
                                <Icon_Arrow_Left class="-rotate-12 sm-max:hidden" />

                                <h3 class="mb-0 ml-2 font-caveat text-48 leading-10 text-orange-light">Find an expert</h3>
                            </div>

                            <p class="rotate-6 font-caveat text-40 leading-10 sm-max:ml-2">Browse our community of vetted experts, to get the help you seek.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-bottom bg-no-repeat sm:col-span-12 sm-max:py-4 md:bg-[url('/assets/img/bg-step-2.png')] md:py-8 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <div class="grid rotate-2 md:grid-cols-12 md:gap-3">
                        <div class="order-2 md:col-span-6">
                            <div class="relative xs-max:w-[310px] sm:w-[360px] sm-max:mx-auto">
                                <img class="absolute -z-10 xs-max:left-[16px] xs-max:top-[11px] xs-max:w-[280px] md:hidden sm:md-max:left-[18px] sm:md-max:top-[12px] sm:md-max:w-[326px]" src="/assets/img/video-book-and-pay.png" alt="Book and pay" />

                                <video :autoplay="autoplay" class="absolute -z-10 shadow-2xl shadow-black sm:left-[20px] sm:top-[15px] sm-max:hidden" src="/assets/video/book-and-pay.mp4" loop muted></video>

                                <img src="/assets/img/img-iphone-frame.png" alt="iPhone frame" />
                            </div>
                        </div>

                        <div class="order-1 sm-max:mb-4 sm-max:text-center md:col-span-6 md:flex md:flex-col md:items-end md:text-right xl:pt-4">
                            <h3 class="rotate-4 mb-0 font-caveat text-48 leading-10 text-orange-light md:mr-4">Book and pay</h3>

                            <p class="mt-4 -rotate-6 font-caveat text-40 leading-10">Check an expert's availability, and book what works for you.</p>

                            <Icon_Arrow_Right class="-rotate-6 sm-max:hidden" />
                        </div>
                    </div>
                </div>

                <div class="bg-bottom bg-no-repeat sm:col-span-12 sm-max:pb-1 sm-max:pt-4 md:bg-[url('/assets/img/bg-step-3.png')] md:py-8 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <div class="grid -rotate-2 md:grid-cols-12 md:gap-3">
                        <div class="sm-max:order-2 md:col-span-6">
                            <div class="relative xs-max:w-[310px] sm:w-[360px] sm-max:mx-auto">
                                <img class="absolute -z-10 xs-max:left-[16px] xs-max:top-[10px] xs-max:w-[280px] md:hidden sm:md-max:left-[18px] sm:md-max:top-[12px] sm:md-max:w-[327px]" src="/assets/img/video-meet-virtually.png" alt="Meet virtually" />

                                <video :autoplay="autoplay" class="absolute -z-10 shadow-2xl shadow-black sm:left-[20px] sm:top-[15px] sm-max:hidden" src="/assets/video/meet-virtually.mp4" loop muted></video>

                                <img src="/assets/img/img-iphone-frame.png" alt="iPhone frame" />
                            </div>
                        </div>

                        <div class="sm-max:order-1 sm-max:mb-4 sm-max:text-center md:col-span-5 md:pt-4">
                            <div class="mb-3 md:-ml-6 md:flex md:items-end">
                                <Icon_Arrow_Left class="-rotate-12 sm-max:hidden" />

                                <h3 class="mb-0 ml-2 font-caveat text-48 leading-10 text-orange-light">Meet virtually</h3>
                            </div>

                            <p class="rotate-6 font-caveat text-40 leading-10 sm-max:ml-2">Connect with your expert in a 1:1 video session.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Expert_Spotlight />
</template>

<script>
    export default {
        data() {
            return {
                autoplay: false,
            };
        },
        mounted() {
            // Autoplay if the viewport width is greater than 768px
            this.autoplay = window.innerWidth > 768;

            // Update autoplay on resize
            window.addEventListener('resize', this.updateAutoplay);
        },
        beforeDestroy() {
            // Remove autoplay on resize
            window.removeEventListener('resize', this.updateAutoplay);
        },
        methods: {
            updateAutoplay() {
                // Autoplay if the viewport width is greater than 768px
                this.autoplay = window.innerWidth > 768;
            },
        },
    };
</script>
