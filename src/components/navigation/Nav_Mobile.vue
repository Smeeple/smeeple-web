<template>
    <nav class="fixed top-0 z-40 flex h-full w-full flex-col justify-center overflow-y-auto bg-blue transition-all duration-[600ms] lg:hidden">
        <ul class="nav-list w-full scale-90 list-none pt-8 text-center text-32 text-white transition-all duration-300">
            <Nav_List parentClass="nav-mobile" @nav-click="$emit('nav-click')" />
        </ul>

        <ul class="app-list mt-2 w-full scale-90 list-none text-white transition-all duration-300">
            <li>
                <CTA_App_Store class="w-full" />
            </li>

            <li class="mt-2">
                <CTA_Google_Play class="w-full" />
            </li>
        </ul>
    </nav>
</template>
