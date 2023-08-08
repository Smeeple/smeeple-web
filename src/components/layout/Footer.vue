<template>
    <footer class="bg-blue-dark text-white">
        <div class="bg-blue py-4">
            <div class="container">
                <!-- <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"> -->
                <div class="grid grid-cols-12 gap-3">
                    <div class="order-1 col-span-12 sm:col-span-6 lg:col-span-3 2xl:col-span-3">
                        <NuxtLink to="/">
                            <Logo_Smeeple_White />
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

                    <div class="col-span-12 xs-max:order-2 xs-max:mt-1 sm:order-3 sm:col-span-6 lg:order-2 lg:col-span-2 xl:col-span-2">
                        <h3 class="text-blue-light">Menu</h3>

                        <ul class="nav-list list-none">
                            <Nav_List />
                        </ul>
                    </div>

                    <div class="col-span-12 xs-max:order-3 sm:order-2 sm:col-span-6 lg:order-3 lg:col-span-3 2xl:col-span-3">
                        <h3 class="text-green-light">Join the community</h3>

                        <p>Are you a subject matter expert? Looking for clients and visibility?</p>

                        <NuxtLink class="cta-secondary mt-2 xs-max:block" to="/for-experts">Become an expert</NuxtLink>
                    </div>

                    <div class="order-4 col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4">
                        <h3 class="text-orange-light">About</h3>

                        <p>Smeeple is connecting people to subject matter experts, through video conferencing, to gain knowledge, skills, and insight.</p>

                        <ul class="mt-3 list-none">
                            <li class="inline-block">
                                <NuxtLink to="https://www.facebook.com/profile.php?id=100089918992934" target="_blank">
                                    <Icon_Facebook class="fill-orange-light" />
                                </NuxtLink>
                            </li>

                            <li class="ml-3 inline-block">
                                <NuxtLink to="https://twitter.com/smeeple_" target="_blank">
                                    <Icon_Twitter class="fill-orange-light" />
                                </NuxtLink>
                            </li>

                            <li class="ml-3 inline-block">
                                <NuxtLink to="https://www.instagram.com/_smeeple" target="_blank">
                                    <Icon_Instagram class="fill-orange-light" />
                                </NuxtLink>
                            </li>

                            <li class="ml-3 inline-block">
                                <NuxtLink to="https://www.linkedin.com/company/smeeple" target="_blank">
                                    <Icon_LinkedIn class="fill-orange-light" />
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <!-- <div class="order-4">
                        <h4 class="text-orange-light">Newsletter</h4>

                        <p>Be the first to know about the latest news and updates from Smeeple.</p>

                        <form class="mt-3">
                            <input type="email" placeholder="Email address" />
                        </form>

                        <NuxtLink class="cta-tertiary mt-2" to="#">Sign up</NuxtLink>
                    </div> -->
                </div>
            </div>
        </div>

        <div class="sm-max:py-4 md:py-2">
            <div class="container md:flex md:items-center md:justify-between">
                <p class="sm-max:mb-3">&copy; {{ new Date().getFullYear() }} Smeeple. <br class="sm-max:hidden xl:hidden" />All rights reserved.</p>

                <ul class="nav-list list-none md:flex md:items-center md-max:justify-center">
                    <li class="sm-max:mt-2">
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
;
