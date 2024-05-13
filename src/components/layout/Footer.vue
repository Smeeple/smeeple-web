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
                <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                    <div class="order-1 sm:col-span-6 xl:col-span-3 2xl:col-span-4">
                        <NuxtLink to="/">
                            <Logo_Smeeple parentClass="logo-light" />
                        </NuxtLink>

                        <ul class="app-list mt-3 list-none">
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

                        <NuxtLink class="cta-secondary mt-3" to="/for-experts">Become an expert</NuxtLink>
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
                        <NuxtLink href="/terms-and-conditions">Terms & conditions</NuxtLink>
                    </li>

                    <li class="sm-max:mt-1 md:ml-4">
                        <NuxtLink to="/privacy-policy">Privacy policy</NuxtLink>
                    </li>

                    <li class="sm-max:mt-1 md:ml-4">
                        <NuxtLink to="/booking-policy-and-expert-agreement">Booking policy & <br class="sm-max:hidden lg:hidden" />expert agreement</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
