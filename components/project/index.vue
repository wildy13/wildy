<script setup>
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ipsam maxime possimus corrupti
                    nostrum fugiat eligendi sequi odit itaque fuga veritatis laudantium cum esse, ut numquam quae est
                    fugit sapiente.
                </div>
            </div>
        </div>
    </section>
</template>