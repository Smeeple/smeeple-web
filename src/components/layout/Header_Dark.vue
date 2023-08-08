<script setup>
    useHead({
        script: [{ src: 'assets/js/components/Header.js', tagPosition: 'bodyClose' }],
    });
</script>

<template>
    <header class="fixed top-0 z-50 w-full transition-all duration-300">
        <Header_Banner />

        <div class="container py-2">
            <div class="flex min-h-[52px] items-center justify-between">
                <NuxtLink to="/">
                    <Logo_Smeeple_White />
                </NuxtLink>

                <nav class="nav-desktop">
                    <ul class="nav-list flex list-none items-center">
                        <li v-if="$route.path === '/for-experts'" class="mr-4 sm-max:hidden">
                            <NuxtLink class="text-white" to="/">For consumers</NuxtLink>
                        </li>

                        <li v-if="$route.path !== '/for-experts'" class="sm-max:hidden">
                            <NuxtLink class="text-white" to="/for-experts">For experts</NuxtLink>
                        </li>

                        <li v-if="$route.path === '/for-experts'" class="sm-max:hidden">
                            <NuxtLink class="cta-primary flex items-center" to="https://app.smeeple.com/sign-in">
                                <Icon_Locked class="mr-1 fill-white" />

                                Expert login
                            </NuxtLink>
                        </li>

                        <li :class="{ 'nav-toggle-open': isNavOpen }" class="nav-toggle ml-2 md:hidden">
                            <Icon_Menu @click="toggleNav" />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <Nav_Mobile :class="{ 'right-0': isNavOpen }" />
</template>

<script>
    export default {
        data() {
            return {
                isNavOpen: false,
            };
        },
        methods: {
            toggleNav() {
                this.isNavOpen = !this.isNavOpen;

                if (this.isNavOpen) {
                    document.body.classList.add('overflow-hidden');
                } else {
                    document.body.classList.remove('overflow-hidden');
                }
            },
        },
        mounted() {
            if (!this.isNavOpen) {
                document.body.classList.remove('overflow-hidden');
            }
        },
    };
</script>
