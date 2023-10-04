<template>
    <section class="sm-max:pb-3 sm-max:pt-6">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="text-center sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h2 class="mb-3 inline-block -rotate-3 -skew-x-6 rounded-lg bg-green-light px-2 text-white">How it works</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>

                <div class="bg-[url('/assets/img/bg-step-1.png')] bg-bottom bg-no-repeat sm:col-span-12 sm-max:py-4 md:py-8 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <div class="-rotate-2 sm:grid sm:grid-cols-12 sm:gap-3">
                        <div class="sm:col-span-6">
                            <div class="relative w-[360px]">
                                <img class="absolute left-[20px] top-[15px] -z-10 shadow-2xl shadow-black" src="/assets/img/animation-find-experts.gif" alt="Find an expert animation" />

                                <img class="w-[640px]" src="/assets/img/img-iphone-frame.png" alt="iPhone frame" />
                            </div>
                        </div>

                        <div class="pt-4 sm:col-span-6">
                            <div class="-ml-6 mb-3 flex items-end">
                                <Icon_Arrow_Left class="-rotate-12" />

                                <h3 class="mb-0 ml-2 font-caveat text-48 leading-10 text-orange-light">Find an expert</h3>
                            </div>

                            <p class="rotate-6 font-caveat text-40 leading-10">Browse our community of vetted experts, to get the help you seek.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-[url('/assets/img/bg-step-2.png')] bg-bottom bg-no-repeat sm:col-span-12 sm-max:py-4 md:py-8 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <div class="rotate-2 sm:grid sm:grid-cols-12 sm:gap-3">
                        <div class="mt-4 flex flex-col items-end sm:col-span-6">
                            <!-- <span class="mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-light text-36 text-white">2</span> -->

                            <h3 class="rotate-4 mb-0 mr-4 font-caveat text-48 leading-10 text-orange-light">Book & pay</h3>

                            <p class="mt-4 -rotate-6 font-caveat text-40 leading-10">Check an expert's availability, and book what works for you.</p>

                            <Icon_Arrow_Right class="-rotate-6" />
                        </div>

                        <div class="sm:col-span-6">
                            <div class="relative w-[360px]">
                                <img class="absolute left-[20px] top-[15px] -z-10 shadow-2xl shadow-black" src="/assets/img/animation-book-pay.gif" alt="Book & pay animation" />

                                <img class="w-[640px]" src="/assets/img/img-iphone-frame.png" alt="iPhone frame" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-[url('/assets/img/bg-step-3.png')] bg-bottom bg-no-repeat sm:col-span-12 sm-max:py-4 md:py-8 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <div class="-rotate-2 sm:grid sm:grid-cols-12 sm:gap-3">
                        <div class="sm:col-span-6">
                            <div class="relative w-[360px]">
                                <img class="absolute left-[20px] top-[15px] -z-10 shadow-2xl shadow-black" src="/assets/img/animation-find-experts.gif" alt="Find experts animation" />

                                <img class="w-[640px]" src="/assets/img/img-iphone-frame.png" alt="iPhone frame" />
                            </div>
                        </div>

                        <div class="pt-4 sm:col-span-6">
                            <div class="-ml-6 mb-3 flex items-end">
                                <Icon_Arrow_Left class="-rotate-12" />

                                <h3 class="mb-0 ml-2 font-caveat text-48 leading-10 text-orange-light">Meet virtually</h3>
                            </div>

                            <p class="rotate-6 font-caveat text-40 leading-10">Connect with your expert in a one-on-one video session.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
