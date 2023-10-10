<script setup>
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | Smeeple` : 'Smeeple';
        },
        bodyAttrs: {
            class: 'bg-[url("/assets/img/bg-dot.png")]',
        },
    });
</script>

<template>
    <Header />

    <section class="relative -mt-[141px] flex items-center bg-blue-dark bg-[url('/assets/img/bg-shapes-blue.png')] md-max:pb-0 lg:pt-[221px]">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h1 class="mb-0">Contact us</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="xs-max:mt-3 sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 2xl:col-span-5 2xl:col-start-3">
                    <h2>Send a message</h2>

                    <p>Have a question, technical issue, or some feedback? Our team is here to assist you. Complete the form below, and we'll respond as soon as we can.</p>

                    <div class="mt-3">
                        <slot />
                    </div>
                </div>

                <div class="xs-max:mt-3 sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 2xl:col-span-3">
                    <Contact_Sidebar />
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>
