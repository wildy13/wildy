<script setup>

const name = ref(null);
const title1 = ref(null);
const image1 = ref(null);
const image2 = ref(null);


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
</script>

<template>
    <div class="min-h-screen w-full bg-[#111111] overflow-x-hidden">
        <section class="relative h-screen">
            <div ref="image1" class="absolute  top-0 left-0 md:flex justify-start   w-full ">
                <img src="/bg.jpeg" class="md:w-96 bg-contain">
            </div>
            <div class="flex justify-center md:justify-between absolute top-1/3 w-full px-12">
                <div ref="name" class="absolute -top-20 left-0 z-50 w-full">
                    <div class="text-6xl md:text-9xl text-center">Wildy</div>
                    <div class="text-6xl md:text-9xl text-center">Johanes</div>
                </div>
                <div ref="image2" class="absolute top-0 right-0 md:flex justify-end hidden  w-full ">
                    <img src="/bg.jpeg" class="md:w-96  bg-contain">
                </div>
            </div>

            <div class="h-full  overflow-x-hidden relative">
                <div class="flex items-center space-x-4  h-20 md:h-12  absolute bottom-4 w-full">
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
        <About />
        <Project />
        <Contact />
    </div>
</template>
