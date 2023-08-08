<template>
    <nav class="nav-mobile fixed -right-[767px] top-0 z-40 h-full w-full overflow-y-auto bg-blue transition-all duration-[600ms] md:hidden">
        <div class="flex h-full flex-col justify-center">
            <ul class="nav-list w-full scale-90 list-none pt-8 text-center text-32 text-white transition-all duration-300">
                <Nav_List />
            </ul>

            <ul class="app-list mt-2 w-full scale-90 list-none text-center text-white transition-all duration-300">
                <li>
                    <CTA_App_Store />
                </li>

                <li class="mt-2">
                    <CTA_Google_Play />
                </li>
            </ul>
        </div>
    </nav>
</template>
