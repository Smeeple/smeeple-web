<script setup>
    const runtimeConfig = useRuntimeConfig();
    const googlePlayLink = runtimeConfig.public.googlePlayLink;
    const appleLink = runtimeConfig.public.appleLink;

    useHead({
        title: 'Connecting Subject Matter Experts + People',
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
    <section class="relative -mt-[141px] flex items-center bg-blue-dark bg-[url('/assets/img/bg-shapes-blue.png')] text-white md-max:pb-0 lg:py-12">
        <div class="container sm-max:pb-6 sm-max:pt-10 md:py-12 md-max:mt-5 lg:mt-8">
            <div class="sm:grid sm:grid-cols-12 xl:items-center xl:gap-9 2xl:gap-12">
                <div class="sm:col-span-12 xl:col-span-6">
                    <h1 class="mb-0 pb-2 sm-max:text-40 sm-max:leading-[1.2] md:text-[60px] md:leading-none lg:text-[72px] xl:text-[60px] 2xl:text-[72px]">Connecting <span class="font-medium text-blue-light">subject</span> <span class="font-medium text-green-light">matter</span> <span class="font-medium text-orange-light">experts</span> + people</h1>

                    <p class="mt-3">Smeeple brings you face-to-face with experts from a wide variety of fields such as interior design, fitness, HVAC, gardening, and more. Don't settle for generic online tutorials. Connect with knowledgeable experts, to get the tailored answers you&nbsp;deserve.</p>

                    <div class="mt-5 flex items-center lg-max:hidden">
                        <img src="/assets/img/qr-smeeple-app.png" alt="QR code to download the Smeeple app" />

                        <div class="ml-3">
                            <p>Scan the QR code,<br />to download Smeeple.</p>

                            <div class="mt-1 flex">
                                <a :href="appleLink" target="_blank" rel="noopener noreferrer">
                                    <Icon_Apple />
                                </a>

                                <a :href="googlePlayLink" target="_blank" rel="noopener noreferrer">
                                    <Icon_Google_Play class="ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-3 sm:col-span-12 lg-max:mt-5 lg:lg-max:flex lg:lg-max:flex-col lg:lg-max:justify-center xl:col-span-6">
                    <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg pt-[56.25%]">
                        <iframe class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full" src="https://www.youtube-nocookie.com/embed/uTDq7gLUxn0?mode=opaque&rel=0&autohide=1&showinfo=0&wmode=transparent" title="Where can I get personalized help on any subject?" allowfullscreen></iframe>
                    </div>

                    <div class="mx-auto mt-6 flex items-center md-max:hidden xl:hidden">
                        <img src="/assets/img/qr-smeeple-app.png" alt="QR code to download the Smeeple app" />

                        <div class="ml-3">
                            <p>Scan the QR code,<br />to download Smeeple.</p>

                            <div class="mt-1 flex">
                                <a :href="appleLink" target="_blank" rel="noopener noreferrer">
                                    <Icon_Apple />
                                </a>

                                <a :href="googlePlayLink" target="_blank" rel="noopener noreferrer">
                                    <Icon_Google_Play class="ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="cta-group mt-6 lg:hidden">
                        <CTA_App_Store />

                        <CTA_Google_Play />
                    </div>
                </div>
            </div>
        </div>

        <div class="scroll-indicator md-max:hidden">
            <span class="scroll-mouse">
                <span class="scroll-wheel"></span>
            </span>
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
