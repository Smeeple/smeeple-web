<template>
    <section class="bg-blue-light bg-[url('/assets/img/bg-dot.png')] bg-bottom py-4">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="text-center sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h2 class="leading-tight text-white">Subscribe to our newsletter</h2>

                    <div class="mb-3 sm:flex sm:items-center sm:justify-center">
                        <form>
                            <input class="border-white xs-max:mb-2 sm:w-[360px]" type="email" placeholder="Enter your email address" />
                        </form>

                        <NuxtLink class="cta-tertiary sm:ml-2" to="#">Sign up</NuxtLink>
                    </div>

                    <p class="text-white">Get the latest Smeeple news and updates delivered <br class="sm-max:hidden" />directly to your inbox.</p>
                </div>
            </div>
        </div>
    </section>
</template>
