<template>
    <section class="overflow-hidden md-max:pb-5 md-max:pt-7">
        <div class="container">
            <div class="sm:grid sm:grid-cols-12 sm:gap-3">
                <div class="text-center sm:col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
                    <h2 class="mb-8 inline-block -rotate-3 -skew-x-6 rounded-lg bg-green-light px-2 text-white">Expert spotlight</h2>

                    <p>Check out some of our top experts, from industry leaders to social media giants. With Smeeple, you'll get personalized one-on-one assistance tailored to your needs, when you need it the most.</p>
                </div>
            </div>
        </div>

        <div class="marquee mt-8 md-max:mb-3 lg:mb-0">
            <ul class="marquee-content list-none">
                <li v-for="expert in expertSpotlight" :key="expert.id" class="mx-[15px] flex scale-100 items-center justify-center rounded-lg shadow-md transition-all lg:hover:scale-105">
                    <a :href="expert.profile" class="flex flex-1 flex-col no-underline" target="_blank">
                        <div class="absolute -left-[8px] top-[8px] z-10 rounded-md bg-orange-light px-2 font-poppins text-16 text-white">{{ expert.category }}</div>

                        <div :style="{ backgroundImage: `url('${expert.photo}')` }" class="card relative aspect-square h-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-light bg-cover duration-300"></div>
                        <div class="card-body grid w-full grid-cols-12 rounded-lg bg-white p-1">
                            <div class="col-span-9">
                                <span class="block font-poppins text-18 text-black">{{ expert.name }}</span>
                                <span class="block overflow-hidden text-ellipsis whitespace-nowrap font-poppins text-14 text-blue-light">{{ expert.specialty }}</span>
                            </div>

                            <div class="col-span-3 text-right">
                                <span class="inline-block rounded-md bg-green-light px-2 font-poppins text-16 text-white">{{ expert.rate }}</span>
                            </div>
                        </div>
                    </a>
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
        --marquee-element-width: 300px;
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
