<script setup>
    definePageMeta({
        layout: 'interior',
    });

    useHead({
        title: 'About Smeeple',
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
    <section class="relative -mt-[141px] flex items-center bg-blue-dark bg-[url('/assets/img/bg-shapes-blue.png')] md-max:pb-0 lg:pt-[221px]">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h1 class="mb-0">About Smeeple</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h2>Two college friends embarked on a mission, to create the #1 community of&nbsp;experts</h2>

                    <figure class="sm-max:mx-auto sm-max:mb-3 sm-max:w-auto md:float-left md:mb-2 md:mr-3 md:mt-1 lg:w-[300px] xl:w-[360px]">
                        <img class="mb-1 rounded-lg" src="/assets/img/photo-calvin-josh.jpg" alt="Photo of Calvin and Josh" />

                        <figcaption>
                            <cite>Calvin Holston (left) and Josh Mallalieu (right), graduating from Grove City College.</cite>
                        </figcaption>
                    </figure>

                    <p>Looking for solutions to unique problems? You're not alone. We've all been stumped by topics like a leaky faucet, the best way to improve our golf swing, or finding the right skincare routine for our skin type. While online resources can be helpful, they don't always provide the answers we need.</p>

                    <p>That's why we created Smeeple. Our community of experts covers a wide range of categories, from DIY projects to sports training to home decor and beyond. With just a few clicks, you can connect live with the expert who can help you solve your problem. No more endless searching or generic advice. Get personalized solutions that work for you with Smeeple.</p>

                    <p>At Smeeple, we believe that everyone deserves access to reliable, personalized solutions for their unique problems. That's why we're committed to building a community of experts that spans a wide variety of categories, so you can find the help that's right for you. Our platform is easy to use and accessible from anywhere, so you can get the answers you need when and where it's convenient for you. Regardless of your current level of understanding in the topic, our experts are here to guide you every step of the way. Join Smeeple today and start solving your problems with the help of our amazing community of experts.</p>

                    <p>- Calvin & Josh</p>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>
