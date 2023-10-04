<template>
    <section class="overflow-hidden sm-max:pb-5 sm-max:pt-3">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="text-center sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h2 class="mb-3 inline-block rotate-3 skew-x-6 rounded-lg bg-green-light px-2 text-white">Expert spotlight</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
            </div>
        </div>

        <div class="marquee mt-4 lg:mb-3">
            <ul class="marquee-content list-none">
                <li v-for="expert in expertSpotlight" :key="expert.id" class="mx-[15px] scale-100 transition-all lg:hover:scale-105">
                    <NuxtLink :to="expert.profile" class="relative flex-1 text-white no-underline" target="_blank">
                        <div class="absolute -left-[8px] top-[8px] z-10 rounded-md bg-orange-light px-2 font-poppins text-white shadow-md">{{ expert.category }}</div>

                        <div :style="{ backgroundImage: `url('${expert.photo}')` }" class="card relative h-[480px] overflow-hidden rounded-lg bg-gray-light shadow-lg shadow-black/60 duration-300">
                            <div class="card-wrapper h-full p-2" style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 1%, rgba(10, 12, 33, 0) 50%, rgba(21, 25, 67, 1) 100%)">
                                <div class="card-container h-full rounded-lg border-[3px] border-white border-opacity-60">
                                    <div class="card-body absolute bottom-4 left-4">
                                        <div class="block font-poppins">{{ expert.name }}</div>

                                        <div class="mt-[5px] flex items-center">
                                            <div class="inline-block rounded-md bg-green-light px-1 text-white">{{ expert.rate }}</div>

                                            <Icon_Star class="-mt-[4px] ml-1" />

                                            <div class="ml-[5px]">{{ expert.rating }}</div>

                                            <div class="ml-[5px]">({{ expert.reviews }})</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import expertSpotlight from '~/assets/js/data/expert-spotlight.json';

    export default {
        data() {
            return {
                expertSpotlight,
            };
        },
        mounted() {
            const root = document.documentElement;
            const marqueeElementsDisplayed = 7;
            const marqueeContent = document.querySelector('ul.marquee-content');

            if (marqueeContent) {
                root.style.setProperty('--marquee-elements', marqueeContent.children.length);

                for (let i = 0; i < marqueeElementsDisplayed; i++) {
                    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
                }
            } else {
                console.error('marquee-content element not found');
            }
        },
    };
</script>

<style>
    :root {
        --marquee-width: 100vw;
        --marquee-elements-displayed: 7;
        --marquee-element-width: 365px;
        --marquee-animation-duration: calc(var(--marquee-elements) * 5s);
    }

    @keyframes scrolling {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements)));
        }
    }

    .marquee {
        position: relative;
    }

    .marquee-content {
        height: 100%;
        display: flex;
        animation: scrolling var(--marquee-animation-duration) linear infinite;
    }

    .marquee-content:hover {
        animation-play-state: paused;
    }

    .marquee-content li {
        display: flex;
        flex-shrink: 0;
        width: var(--marquee-element-width);
    }

    .marquee-content li img {
        width: 100%;
        border: 2px solid #eee;
    }

    @media (max-width: 600px) {
        :root {
            --marquee-width: 100vw;
            --marquee-elements-displayed: 3;
        }

        .marquee:before,
        .marquee:after {
            width: 5rem;
        }
    }
</style>
