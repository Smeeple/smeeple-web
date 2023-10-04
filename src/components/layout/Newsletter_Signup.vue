<template>
    <section class="border-t border-gray-dark bg-blue-light bg-[url('/assets/img/bg-dot.png')] bg-bottom sm-max:pb-5 sm-max:pt-4">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="text-center sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h2 class="leading-tight text-white">Subscribe to our newsletter</h2>

                    <div class="mb-3 flex items-center justify-center">
                        <form>
                            <input class="w-[360px] border-white" type="email" placeholder="Enter your email address" />
                        </form>

                        <NuxtLink class="cta-tertiary ml-2" to="#">Sign up</NuxtLink>
                    </div>

                    <p class="text-white">Get the latest Smeeple news and updates delivered<br />directly to your inbox every month.</p>
                </div>
            </div>
        </div>
    </section>
</template>
