<script setup>
    const runtimeConfig = useRuntimeConfig();
    const googlePlayLink = runtimeConfig.public.googlePlayLink;
    const appleLink = runtimeConfig.public.appleLink;
</script>

<template>
    <Newsletter_Signup />

    <footer class="bg-blue-dark text-white">
        <div class="bg-blue py-4">
            <div class="container">
                <!-- <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"> -->
                <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                    <div class="order-1 sm:col-span-6 xl:col-span-3 2xl:col-span-4">
                        <a href="/">
                            <Logo_Smeeple parentClass="logo-light" />
                        </a>

                        <div class="mt-2 md-max:hidden lg:lg-max:flex lg:lg-max:items-center 2xl:flex 2xl:items-center">
                            <img src="/assets/img/qr-smeeple-app.png" alt="QR code to download the Smeeple app" />

                            <div class="lg:lg-max:ml-3 xl:xl-max:mt-3 2xl:ml-3">
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

                        <ul class="app-list mt-3 list-none lg:hidden">
                            <li>
                                <CTA_App_Store />
                            </li>

                            <li class="mt-2">
                                <CTA_Google_Play />
                            </li>
                        </ul>
                    </div>

                    <nav class="xs-max:order-2 xs-max:mt-3 sm:order-3 sm:col-span-6 xl:order-2 xl:col-span-2">
                        <h6 class="text-blue-light">Menu</h6>

                        <ul class="nav-list list-none">
                            <Nav_List parentClass="nav-footer" />
                        </ul>
                    </nav>

                    <div class="xs-max:order-3 xs-max:mt-3 sm:order-2 sm:col-span-6 xl:order-3 xl:col-span-3 2xl:col-span-3">
                        <h6 class="text-green-light">Join our community</h6>

                        <p>Want to share your expertise, assist others remotely, and connect with your network?</p>

                        <a class="cta-secondary mt-3" href="/for-experts">Become an expert</a>
                    </div>

                    <div class="order-4 xs-max:mt-3 sm:col-span-6 xl:col-span-3">
                        <h6 class="text-orange-light">Smeeple</h6>

                        <p>Connecting people to subject matter experts, through video conferencing, to gain knowledge, skills, and insight.</p>

                        <Social_List parentClass="icons-orange" />
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-[url('/assets/img/bg-shapes-blue.png')] sm-max:py-4 md:py-2">
            <div class="container md:flex md:items-center md:justify-between">
                <p class="sm-max:mb-3">&copy; {{ new Date().getFullYear() }} Smeeple. <br class="sm-max:hidden xl:hidden" />All rights reserved.</p>

                <ul class="nav-list list-none md:flex md:items-center md-max:justify-center">
                    <li>
                        <a href="/terms-and-conditions">Terms & conditions</a>
                    </li>

                    <li class="sm-max:mt-1 md:ml-4">
                        <a href="/privacy-policy">Privacy policy</a>
                    </li>

                    <li class="sm-max:mt-1 md:ml-4">
                        <a href="/booking-policy-and-expert-agreement">Booking policy & <br class="sm-max:hidden lg:hidden" />expert agreement</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
