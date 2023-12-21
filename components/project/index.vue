<script setup>
import { icons } from '@iconify-json/devicon';
import { useMouseInElement } from '@vueuse/core'


const project = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(project);

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
    <section ref="project" class="min-h-screen  pt-4 relative">
        <div class="px-4  py-1 border-b-2 border-[#363030] text-xl">RECENT PROJECTS</div>
        <div class="pt-2 flex flex-col md:flex-row px-7 md:space-x-6">
            <div class="md:w-7/12" :style="{ transform: cardTransform, transition: 'transform 0.25s ease-out' }">
                <img src="/3d-asset-station.png" alt="3D Asset Station" class="h-auto w-full">
            </div>
            <div v-motion-slide-visible-once-left :delay="500" class="md:w-5/12 text-justify">
                <div class="text-xl font-semibold py-2">3D Asset Station</div>
                <div class="text-2xl ">
                    This website for displaying and Repository 3D models, The website was created using Nuxt JS as the frontend and
                    Node JS as the backend. using Fastify JS as a router and using ThreeJS to control 3D models and using
                    other supporting packages such as styling, authentication and others.
                </div>
                <div>
                    <div class="text-xl font-semibold py-2">Skills :</div>
                    <div class="flex items-center space-x-4">
                        <IconNodeJS />
                        <IconNuxtJS />
                        <IconMongoDB />
                        <IconFastify />
                        <IconTailwindCSS />
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-2 flex flex-col md:flex-row px-7 md:space-x-6">
            <div v-motion-slide-visible-once-left :delay="500" class="md:w-5/12 text-justify">
                <div class="text-xl font-semibold py-2">Dinas Kesehatan Kota Batam</div>
                <div class="text-2xl ">
                    This website inputs citizen data to make referrals to hospitals in cities or provinces in Indonesia.
                    this website was created using Nuxt JS as the frontend and Node JS as the backend. using fastify as a
                    router and using Tailwind CSS as styling.
                </div>
                <div>
                    <div class="text-xl font-semibold py-2">Skills :</div>
                    <div class="flex items-center space-x-4">
                        <IconNodeJS />
                        <IconNuxtJS />
                        <IconMongoDB />
                        <IconFastify />
                        <IconTailwindCSS />
                    </div>
                </div>
            </div>
            <div class="md:w-7/12" :style="{ transform: cardTransform, transition: 'transform 0.25s ease-out' }">
                <img src="/diskes.png" alt="3D Asset Station" class="h-auto w-full">
            </div>
        </div>
    </section>
</template>
