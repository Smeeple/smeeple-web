<script setup>
    useHead({
        title: 'Join our community of 250+ vetted experts',
        meta: [
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:url', content: '' },
        ],
        bodyAttrs: {
            class: 'bg-gray-darker',
        },
    });
</script>

<template>
    <section class="relative -mt-[141px] flex items-center bg-[#111111] bg-[url('/assets/img/bg-shapes-gray.png')] md-max:pb-0 lg:py-12">
        <div class="container sm-max:pb-6 sm-max:pt-10 md:py-12 md-max:mt-5 lg:mt-8">
            <div class="sm:grid sm:grid-cols-12 xl:items-center xl:gap-9 2xl:gap-12">
                <div class="sm:col-span-12 xl:col-span-6">
                    <h1 class="mb-0 text-white sm-max:text-40 sm-max:leading-[1.2] md:text-[60px] md:leading-none lg:text-[72px] xl:text-[60px] 2xl:text-[72px]">Join our community of <span class="font-medium text-blue-light">250+</span> <span class="font-medium text-green-light">vetted</span> <span class="font-medium text-orange-light">experts</span></h1>

                    <p class="mt-3 text-white">Connect with clients from anywhere. Earn extra income and grow your network, all while saving time and travel expenses. Experience the convenience of virtual meetings when you unlock a world of opportunity with Smeeple.</p>

                    <div class="mt-5 lg-max:hidden">
                        <CTA_Expert_Signup />
                    </div>
                </div>

                <div class="sm:col-span-12 lg-max:mt-5 xl:col-span-6">
                    <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg pt-[56.25%]">
                        <iframe class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full" src="https://www.youtube-nocookie.com/embed/A2z_zUy9ats?mode=opaque&rel=0&autohide=1&showinfo=0&wmode=transparent" title="Signing up as an Expert is easy!" allowfullscreen></iframe>
                    </div>

                    <div class="mt-6 xl:hidden">
                        <CTA_Expert_Signup />
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

    <section class="sm-max:pb-2 sm:md-max:pt-6 lg:pb-0">
        <div class="container">
            <div class="grid text-center xs-max:gap-y-4 sm:grid-cols-12 sm:gap-y-6 lg:gap-6 2xl:gap-12">
                <div class="flex flex-col items-center sm:col-span-12 lg:col-span-4">
                    <Icon_People class="mb-2 fill-transparent stroke-orange-light stroke-[3px]" />

                    <h3 class="mb-3">The platform</h3>

                    <p>Everything built into one platform, eliminating the need for multiple apps, payment systems, and calendars &mdash; allowing you to focus on sharing your expertise and earning, with ease.</p>
                </div>

                <div class="flex flex-col items-center sm:col-span-12 lg:col-span-4">
                    <Icon_Calendar class="mb-2 fill-transparent stroke-orange-light stroke-[3px]" />

                    <h3 class="mb-3">Our community</h3>

                    <p>Maybe you're a Division 1 athlete, a retired plumber, or even a small business owner. With Smeeple, we can bring expertise to the consumers who need it &mdash; within reach of their mobile device.</p>
                </div>

                <div class="flex flex-col items-center sm:col-span-12 lg:col-span-4">
                    <Icon_Chat class="mb-2 fill-transparent stroke-orange-light stroke-[3px]" />

                    <h3 class="mb-3">Your schedule</h3>

                    <p>Smeeple will never impose on your pricing or schedules with consumers. We ask that you maintain professionalism, and give your best effort. We aim to build a community, not just a business.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="sm-max:pb-3 sm-max:pt-6 md:pb-3">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="col-span-12 text-center">
                    <h2 class="mb-8 inline-block -rotate-3 -skew-x-6 rounded-lg bg-green-light px-2 text-white">How it works</h2>
                </div>
            </div>

            <div class="mb-8 grid sm:grid-cols-12 lg:items-center lg:gap-6 2xl:gap-12">
                <div class="sm:col-span-12 md-max:order-2 lg:col-span-6 2xl:col-span-7">
                    <img class="shadow-lg shadow-black/30 md-max:mt-4" src="/assets/img/img-create-profile.png" alt="Expert signup page" />
                </div>

                <div class="sm:col-span-12 md-max:text-center lg:col-span-6 2xl:col-span-5">
                    <h3 class="mb-3">Create a profile</h3>

                    <p>Our process to become an expert is streamlined and guides you through each step. We've made the process straightforward, to facilitate a swift onboarding of our experts onto the Smeeple platform, integrating them promptly into our expert community.</p>
                </div>
            </div>

            <div class="mb-8 grid sm:grid-cols-12 lg:items-center lg:gap-6 2xl:gap-12">
                <div class="sm:col-span-12 md-max:text-center lg:col-span-6 2xl:col-span-5">
                    <h3 class="mb-3">Download the app</h3>

                    <p>Download Smeeple from either app store, to explore the wide variety of experts in our community. Share your profile and engage in video sessions without the need for additional software. Enjoy direct video connections with consumers right within the app.</p>
                </div>

                <div class="sm:col-span-12 md-max:order-2 lg:col-span-6 2xl:col-span-7">
                    <img class="shadow-lg shadow-black/30 md-max:mt-4" src="/assets/img/img-download-app.png" alt="Smeeple app on the Apple App Store" />
                </div>
            </div>

            <div class="mb-8 grid sm:grid-cols-12 lg:items-center lg:gap-6 2xl:gap-12">
                <div class="sm:col-span-12 md-max:order-2 lg:col-span-6 2xl:col-span-7">
                    <img class="shadow-lg shadow-black/30 md-max:mt-4" src="/assets/img/img-expert-preview.png" alt="Expert profile preview" />
                </div>

                <div class="sm:col-span-12 md-max:text-center lg:col-span-6 2xl:col-span-5">
                    <h3 class="mb-3">Share your profile</h3>

                    <p>Amplify the reach of your services by sharing your profile and our platform within your network. Join us in promoting Smeeple, to help extend our collective expertise across the world.</p>
                </div>
            </div>
        </div>
    </section>
</template>
