<script setup>
    const showBanner = ref(true);
    const checkBanner = localStorage.getItem('hiddenBanner');

    // If the banner has been hidden, don't show it again for 30 days
    if (checkBanner) {
        const [, expiration] = checkBanner.split(':');

        // If the expiration date is in the future, don't show the banner
        if (parseInt(expiration) > Date.now()) {
            showBanner.value = false;
        }
    }

    // If the banner is hidden, adjust the top padding
    const hiddenBanner = () => {
        const now = Date.now();
        const thirtyDays = now + 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

        // Store the expiration date to 30 days, in localStorage
        localStorage.setItem('hiddenBanner', `true:${thirtyDays}`);

        // Hide the banner
        showBanner.value = false;

        // Adjust the top padding
        document.body.classList.remove('lg:pt-[141px]');
        document.body.classList.add('lg:pt-[93px]');
    };
</script>

<template>
    <div v-if="showBanner" class="bg-blue-light py-1 text-white md-max:hidden">
        <div class="container relative text-center">
            <p>Are you a subject matter expert? Looking for clients and visibility? <NuxtLink class="text-white" to="/for-experts">Become an expert</NuxtLink></p>

            <NuxtLink @click="hiddenBanner" class="absolute right-2 top-[7px] cursor-pointer">
                <Icon_Close />
            </NuxtLink>
        </div>
    </div>
</template>
