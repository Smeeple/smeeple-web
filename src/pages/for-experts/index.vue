<script setup>
    useHead({
        title: 'Join the community of over 200 experts',
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
    <section class="relative -mt-[141px] flex items-center bg-[#111111] bg-[url('/assets/img/bg-shapes-gray.png')] md-max:pb-0 lg:py-12">
        <div class="container sm-max:pb-6 sm-max:pt-10 md:py-12 md-max:mt-5 lg:mt-8">
            <div class="sm:grid sm:grid-cols-12 xl:items-center xl:gap-9 2xl:gap-12">
                <div class="sm:col-span-12 xl:col-span-6">
                    <h1 class="mb-0 pb-2 leading-none text-white sm-max:text-40 md:text-[60px] lg:text-[72px]">Join the community of <span class="font-medium text-blue-light">over</span> <span class="font-medium text-green-light">200</span> <span class="font-medium text-orange-light">experts</span></h1>

                    <p class="mt-3 text-white">Connect with clients from anywhere. Earn extra income and grow your network, all while saving time and travel expenses. Experience the convenience of virtual meetings when you unlock a world of opportunity with Smeeple.</p>

                    <NuxtLink class="cta-primary mt-5" to="https://app.smeeple.com/sign-up" target="_blank">Sign up</NuxtLink>
                </div>

                <div class="sm:col-span-12 lg-max:mt-5 xl:col-span-6">
                    <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg pt-[56.25%]">
                        <iframe class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full" src="https://www.youtube-nocookie.com/embed/A2z_zUy9ats?mode=opaque&rel=0&autohide=1&showinfo=0&wmode=transparent" title="Where can I get personalized help on any subject?" allowfullscreen></iframe>
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

    <section class="sm-max:pb-3 sm-max:pt-6">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="text-center sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-4">
                    <h2 class="mb-3">The platform</h2>

                    <p>We put everything together in one place so you don't have to juggle different apps, payment systems, and calendars &mdash; to save you time and effort. You can share your expertise and start earning with ease.</p>
                </div>

                <div class="text-center sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-4">
                    <h2 class="mb-3">The community</h2>

                    <p>You might be a Division 1 athlete, a retired plumber, or a small business owner. Together we can bring expertise to people who need it. Right to their fingertips.</p>
                </div>

                <div class="text-center sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-4">
                    <h2 class="mb-3">Your hours, your rates</h2>

                    <p>Smeeple will never dictate what you charge or when you meet with people. All we ask is you do your best. We're focused on building a community, not just a business.</p>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>
