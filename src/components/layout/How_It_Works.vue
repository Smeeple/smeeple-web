<template>
    <section class="sm-max:pb-3 sm-max:pt-6">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="text-center sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h2 class="mb-3 inline-block -rotate-3 -skew-x-6 rounded-lg bg-green-light px-2 text-white">How it works</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>

                <div class="bg-bottom bg-no-repeat sm:col-span-12 sm-max:py-4 md:bg-[url('/assets/img/bg-step-1.png')] md:py-8 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <div class="grid -rotate-2 md:grid-cols-12 md:gap-3">
                        <div class="sm-max:order-2 md:col-span-6">
                            <div class="relative w-[360px] sm-max:mx-auto">
                                <video class="absolute left-[20px] top-[15px] -z-10 shadow-2xl shadow-black" src="/assets/video/find-an-expert.mp4" autoplay loop muted></video>

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
                            <div class="relative w-[360px] sm-max:mx-auto">
                                <video class="absolute left-[20px] top-[15px] -z-10 shadow-2xl shadow-black" src="/assets/video/book-and-pay.mp4" autoplay loop muted></video>

                                <img src="/assets/img/img-iphone-frame.png" alt="iPhone frame" />
                            </div>
                        </div>

                        <div class="order-1 sm-max:mb-4 sm-max:text-center md:col-span-6 md:flex md:flex-col md:items-end md:pt-4 md:text-right">
                            <h3 class="rotate-4 mb-0 font-caveat text-48 leading-10 text-orange-light md:mr-4">Book & pay</h3>

                            <p class="mt-4 -rotate-6 font-caveat text-40 leading-10">Check an expert's availability, and book what works for you.</p>

                            <Icon_Arrow_Right class="-rotate-6 sm-max:hidden" />
                        </div>
                    </div>
                </div>

                <div class="bg-bottom bg-no-repeat sm:col-span-12 sm-max:py-4 md:bg-[url('/assets/img/bg-step-3.png')] md:py-8 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <div class="grid -rotate-2 md:grid-cols-12 md:gap-3">
                        <div class="sm-max:order-2 md:col-span-6">
                            <div class="relative w-[360px] sm-max:mx-auto">
                                <video class="absolute left-[20px] top-[15px] -z-10 shadow-2xl shadow-black" src="/assets/video/find-an-expert.mp4" autoplay loop muted></video>

                                <img src="/assets/img/img-iphone-frame.png" alt="iPhone frame" />
                            </div>
                        </div>

                        <div class="sm-max:order-1 sm-max:mb-4 sm-max:text-center md:col-span-6 md:pt-4">
                            <div class="mb-3 md:-ml-6 md:flex md:items-end">
                                <Icon_Arrow_Left class="-rotate-12 sm-max:hidden" />

                                <h3 class="mb-0 ml-2 font-caveat text-48 leading-10 text-orange-light">Meet virtually</h3>
                            </div>

                            <p class="rotate-6 font-caveat text-40 leading-10 sm-max:ml-2">Connect with your expert in a one-on-one video session.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
