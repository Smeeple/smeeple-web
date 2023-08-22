<template>
    <footer class="bg-blue-dark text-white">
        <div class="bg-blue py-4">
            <div class="container">
                <!-- <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"> -->
                <div class="grid grid-cols-12 sm:gap-3">
                    <div class="order-1 col-span-12 xs-max:mb-3 sm:col-span-6 xl:col-span-3 2xl:col-span-3">
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

                    <nav class="col-span-12 xs-max:order-2 xs-max:mb-3 xs-max:mt-1 sm:order-3 sm:col-span-6 xl:order-2 xl:col-span-2">
                        <h3 class="text-blue-light">Menu</h3>

                        <ul class="nav-list list-none">
                            <Nav_List parentClass="nav-footer" />
                        </ul>
                    </nav>

                    <div class="col-span-12 xs-max:order-3 xs-max:mb-3 sm:order-2 sm:col-span-6 xl:order-3 xl:col-span-3 2xl:col-span-3">
                        <h3 class="text-green-light">Join the community</h3>

                        <p>Are you a subject matter expert? Looking for clients and visibility?</p>

                        <NuxtLink class="cta-secondary mt-2 xs-max:block" to="/for-experts">Become an expert</NuxtLink>
                    </div>

                    <div class="order-4 col-span-12 sm:col-span-6 xl:col-span-4">
                        <h3 class="text-orange-light">Smeeple</h3>

                        <p>Connecting people to subject matter experts, through video conferencing, to gain knowledge, skills, and insight.</p>

                        <ul class="mt-3 list-none">
                            <li class="inline-block">
                                <NuxtLink to="https://facebook.com/SmeepleApp" target="_blank">
                                    <Icon_Facebook class="fill-orange-light transition-all duration-300 hover:fill-orange-lighter" />
                                </NuxtLink>
                            </li>

                            <li class="inline-block sm-max:ml-2 md:ml-3">
                                <NuxtLink to="https://twitter.com/SmeepleApp" target="_blank">
                                    <Icon_Twitter class="fill-orange-light transition-all duration-300 hover:fill-orange-lighter" />
                                </NuxtLink>
                            </li>

                            <li class="inline-block sm-max:ml-2 md:ml-3">
                                <NuxtLink to="https://instagram.com/SmeepleApp" target="_blank">
                                    <Icon_Instagram class="fill-orange-light transition-all duration-300 hover:fill-orange-lighter" />
                                </NuxtLink>
                            </li>

                            <li class="inline-block sm-max:ml-2 md:ml-3">
                                <NuxtLink to="https://youtube.com/@SmeepleApp" target="_blank">
                                    <Icon_YouTube class="fill-orange-light transition-all duration-300 hover:fill-orange-lighter" />
                                </NuxtLink>
                            </li>

                            <li class="inline-block sm-max:ml-2 md:ml-3">
                                <NuxtLink to="https://linkedin.com/company/smeeple" target="_blank">
                                    <Icon_LinkedIn class="fill-orange-light transition-all duration-300 hover:fill-orange-lighter" />
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-[url('/assets/img/bg-shapes-blue.png')] sm-max:py-4 md:py-2">
            <div class="container md:flex md:items-center md:justify-between">
                <p class="sm-max:mb-3">&copy; {{ new Date().getFullYear() }} Smeeple. <br class="sm-max:hidden xl:hidden" />All rights reserved.</p>

                <ul class="nav-list list-none md:flex md:items-center md-max:justify-center">
                    <li>
                        <NuxtLink to="/terms-and-conditions">Terms & conditions</NuxtLink>
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

<script>
    export default {
        props: {
            parentClass: String,
        },
    };
</script>
