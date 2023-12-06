<script setup>
import { useMouseInElement   } from '@vueuse/core'

const name = ref(null);
const title1 = ref(null);
const project1 = ref(null);
const image1= ref(null);
const image2= ref(null);

onMounted(() => {
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        let lastScrollTop = 0;

        if (name.value) {
            name.value.style.marginTop = value / 3 + 'px';
            if (value > lastScrollTop) {
                name.value.classList.add('opacity-75');
                name.value.classList.remove('opacity-100');
            } else {
                name.value.classList.remove('opacity-75');
                name.value.classList.add('opacity-100');
            }
        }
        if (title1.value) {
            if (value > lastScrollTop) {
                title1.value.classList.remove('left-full');
                title1.value.classList.add('left-0');
            } else {
                title1.value.classList.remove('left-0');
                name.value.classList.add('left-full');
            }
        }
        if (image1.value) {
            image1.value.style.transform = `translateX(-${value}px)`;
        }
        if (image2.value) {
            image2.value.style.transform = `translateX(${value}px)`;
        }
    });
});

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(project1);

const cardTransform = computed(() => {
    const MAX_ROTATION = 6

    const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
    const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

    return isOutside.value
        ? ''
        : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
});

</script>

<template>
    <div class="min-h-screen w-full bg-[#111111]">
        <section class="relative h-screen">
            <div class="flex justify-center md:justify-between absolute top-1/3 w-full px-12">
                <div ref="image1" class="absolute  -top-56 left-0 md:flex justify-start   w-full ">
                    <img src="/bg.jpeg" class="w-96">
                </div>
                <div ref="name" class="absolute -top-20 left-0 z-50 w-full">
                    <div class="text-6xl md:text-9xl text-center">Wildy</div>
                    <div class="text-6xl md:text-9xl text-center">Johanes</div>
                </div>
                <div ref="image2" class="absolute top-0 right-0 md:flex justify-end hidden  w-full ">
                    <img src="/bg.jpeg" class="w-96">
                </div>
            </div>

            <div class="h-full  overflow-x-hidden relative">
                <div
                    class="flex items-center space-x-4  h-20 md:h-12  absolute bottom-4 w-full">
                    <div class="animate-marquee whitespace-nowrap flex flex-row space-x-4 sm:text-xl">
                        <div>Fastify</div>
                        <div>Node JS</div>
                        <div>Nuxt JS</div>
                        <div>MongoDB</div>
                        <div>My SQL</div>
                        <div>Figma</div>
                    </div>
                    <div class="animate-marquee2 whitespace-nowrap flex flex-row space-x-4 sm:text-xl">
                        <div>Fastify</div>
                        <div>Node JS</div>
                        <div>Nuxt JS</div>
                        <div>MongoDB</div>
                        <div>My SQL</div>
                        <div>Figma</div>
                    </div>
                    <div class="animate-marquee3 whitespace-nowrap flex flex-row space-x-4 sm:text-xl">
                        <div>Fastify</div>
                        <div>Node JS</div>
                        <div>Nuxt JS</div>
                        <div>MongoDB</div>
                        <div>My SQL</div>
                        <div>Figma</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-4 relative">
            <div class="px-4  py-1 border-b-2 border-[#363030] text-xl">WHAT I DO</div>
            <div v-motion-slide-visible-once-bottom :delay="500" class="px-4 py-2 text-2xl text-justify">
                As a <span class="text-red-500">web developer</span>, I have a passion for seeking knowledge and experience.
                can compete with times that are
                changing too quickly and can work together with a team so that problems can be resolved.
            </div>
            <div v-motion-slide-visible-once-bottom :delay="500" class="px-4 py-2 text-2xl text-justify">
                As a <span class="text-red-500">son</span>, I had dreams to make my parents happy so that I could live
                happily in this world
            </div>
        </section>
        <section class="min-h-screen  pt-4 relative">
            <div class="px-4  py-1 border-b-2 border-[#363030] text-xl">RECENT PROJECTS</div>
            <div class="pt-2 flex flex-col md:flex-row px-7 md:space-x-6">
                <div ref="project1" class="md:w-7/12"
                    :style="{ transform: cardTransform, transition: 'transform 0.25s ease-out' }">
                    <img src="/3d-asset-station.png" alt="3D Asset Station" class="h-auto w-full">
                </div>
                <div v-motion-slide-visible-once-left :delay="500" class="md:w-5/12 text-justify">
                    <div class="text-xl font-semibold py-2">3D Asset Station</div>
                    <div class="text-2xl ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ipsam maxime possimus corrupti
                        nostrum fugiat eligendi sequi odit itaque fuga veritatis laudantium cum esse, ut numquam quae est
                        fugit sapiente.
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
