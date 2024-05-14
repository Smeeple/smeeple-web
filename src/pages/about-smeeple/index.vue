<script setup>
    useHead({
        title: 'About Smeeple',
        meta: [
            { name: 'description', content: 'Unlock Expertise: Say Goodbye to Generic Tutorials, Hello to Tailored Solutions with Smeeple!' },
            { name: 'keywords', content: 'about us, about smeeple, smeeple, experts, people, expert, book' },
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
                    <h1 class="mb-0">About Smeeple</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h2>Introduction</h2>

                    <div class="embed-responsive embed-responsive-16by9 relative mb-6 w-full overflow-hidden rounded-lg pt-[56.25%]">
                        <iframe class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full" src="https://www.youtube-nocookie.com/embed/uTDq7gLUxn0?mode=opaque&rel=0&autohide=1&showinfo=0&wmode=transparent" title="Where can I get personalized help on any subject?" allowfullscreen></iframe>
                    </div>

                    <h2>Need solutions to unique problems?</h2>
                    <p>We understand that challenges like a persistent leaky faucet, mastering a golf swing, or finding the right skincare routine can be frustrating. The internet, while vast, can be overwhelming and impersonal, often lacking reliable, tailored advice.</p>
                    <p>That's why we created Smeeple. Our app connects you with with <span class="font-medium text-blue-light">SUBJECT</span> <span class="font-medium text-green-light">MATTER</span> <span class="font-medium text-orange-light">EXPERTS</span> (SMEs) in fields ranging from plumbing to sports to home decor. With just a few clicks, you can receive personalized advice and guidance from our experts through 1:1 video conferencing.</p>
                    <p>Join Smeeple today and start solving your problems with the help of experts.</p>
                </div>
            </div>
        </div>
    </section>
</template>
