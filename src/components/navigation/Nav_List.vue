<template>
    <li
        v-if="$route.path !== '/for-experts'"
        :class="{
            'md-max:hidden': parentClass === 'nav-header',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/for-experts" @click.native="$emit('nav-click')">Become an Expert</NuxtLink>
    </li>

    <li
        v-if="$route.path === '/for-experts'"
        :class="{
            'md-max:hidden': parentClass === 'nav-header',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/" @click.native="$emit('nav-click')">For consumers</NuxtLink>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <a class="transition-all duration-150 lg:hover:text-orange-light" href="/browse-experts">Find an Expert</a>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/about-smeeple" @click.native="$emit('nav-click')">About Smeeple</NuxtLink>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <NuxtLink class="transition-all duration-150 lg:hover:text-orange-light" to="/faqs" @click.native="$emit('nav-click')">FAQs</NuxtLink>
    </li>

    <li
        :class="{
            hidden: parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <a class="transition-all duration-150 lg:hover:text-orange-light" href="https://us21.list-manage.com/contact-form?u=d80d185e796d0394c7aedcb86&form_id=c8ff58847bc83c0cb9b8335ee32bfa64" target="_blank">Contact us</a>
    </li>

    <li
        :class="{
            'ml-4 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }"
        v-if="!userId">
        <a
            :class="{
                'border-0 bg-transparent p-0': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
                'place-content-start': parentClass === 'nav-footer',
                'justify-center text-32': parentClass === 'nav-mobile',
            }"
            class="cta-primary flex items-center"
            style="margin-right: 5px"
            href="https://devsmeepleapp.netlify.app/sign-in?click=expert"
            >Expert login</a
        >
    </li>

    <li
        :class="{
            'ml-2 md-max:hidden': parentClass === 'nav-header',
            'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
        }">
        <template v-if="userId">
            <div class="relative inline-block">
                <button class="cta-tertiary" type="submit" style="border-radius: 30px">
                    <div style="text-transform: uppercase; font-size: larger">
                        {{ userInitials }}
                    </div>
                </button>
                <button
                    :class="{
                        'ml-2 md-max:hidden': parentClass === 'nav-header',
                        'mt-1': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
                    }"
                    class="cta-primary"
                    type="submit"
                    style="border-radius: 30px"
                    @click="handleSignOut">
                    <div>Sign Out</div>
                </button>
            </div>
        </template>
        <template v-else>
            <a
                :class="{
                    'border-0 bg-transparent p-0': parentClass === 'nav-footer' || parentClass === 'nav-mobile',
                    'place-content-start': parentClass === 'nav-footer',
                    'justify-center text-32': parentClass === 'nav-mobile',
                }"
                class="cta-primary flex items-center"
                href="https://devsmeepleapp.netlify.app/sign-in/user?click=user">
                User login
            </a>
        </template>
    </li>
</template>

<script>
    import Header from '~/plugins/components/Header';

    export default {
        mixins: [Header],
        name: 'Loader',
        props: {
            active: Boolean,
            text: String,
        },
        data() {
            return {
                userId: null,
                currentUser: null,
            };
        },
        mounted() {
            const userId = this.$route.query.id;
            if (userId) {
                sessionStorage.setItem('userId', userId);
                this.userId = userId;

                // Remove the 'id' parameter from the URL
                const { id, ...query } = this.$route.query; // Destructure to remove 'id' from query
                this.$router.replace({ query });
            }

            const getUserId = sessionStorage.getItem('userId');
            if (getUserId) {
                this.userId = getUserId;

                const cachedUser = sessionStorage.getItem('currentUser');
                if (cachedUser) {
                    this.currentUser = JSON.parse(cachedUser);
                } else {
                    this.fetchCurrentUser(getUserId);
                }
            }
        },
        methods: {
            async fetchCurrentUser(token) {
                try {
                    const headers = {
                        Authorization: `Bearer ${token}`,
                    };

                    const response = await fetch('https://smeeple-dev.azurewebsites.net/api/v1.1/authentication/current-user/identity', { headers });
                    const data = await response.json();
                    this.currentUser = data;
                    // Cache the user data in sessionStorage
                    sessionStorage.setItem('currentUser', JSON.stringify(data));
                } catch (error) {
                    console.error('Error fetching current user:', error);
                }
            },

            handleSignOut() {
                sessionStorage.clear();
                window.location.href = 'https://devsmeepleapp.netlify.app/sign-out/user';
            },
        },
        computed: {
            userInitials() {
                if (this.currentUser && this.currentUser.firstName && this.currentUser.lastName) {
                    return this.currentUser.firstName[0] + this.currentUser.lastName[0];
                }
                return 'user';
            },
        },
    };
</script>

<style scoped>
    /* Your scoped styles here */
</style>
