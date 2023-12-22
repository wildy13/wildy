<script setup>
const workEx = ref(true);

const experiences = [
    {
        id: 1,
        name: "Production Employee",
        company: "Nok Freudenberg Sealing Technologies",
        description: "Maintance and create products Oil Seal using Grinding machine and Assembly Machine",
        from: "July 2021",
        to: "July 2022"
    },
    {
        id: 2,
        name: "Software Web Developer",
        company: "Labtech Penta International",
        description: "Maintance LMS, digital content, and bucket and also develop Website",
        from: "July 2022",
        to: "Now"
    },
];

const calculateDuration = (from, to) => {
    let endDate;
    if (to === 'Now') {
        endDate = new Date();
    } else {
        endDate = new Date(to);
    }

    let startDate = new Date(from);

    let yearDifference = endDate.getFullYear() - startDate.getFullYear();
    let monthDifference = endDate.getMonth() - startDate.getMonth();

    if (endDate.getDate() < startDate.getDate()) {
        monthDifference--;
    }

    if (monthDifference < 0) {
        monthDifference += 12;
        yearDifference--;
    }
    if (monthDifference === 0) {
        if (yearDifference < 2) {
            return `${yearDifference} year`;
        }
        else {
            return `${yearDifference} years`;
        }
    }
    if (monthDifference > 0) {
        if (yearDifference < 2) {
            return `${yearDifference} year and ${monthDifference} months`;
        }
        else {
            return `${yearDifference} years ${monthDifference} months`;
        }
    }
};


const ex = computed(() => experiences.map((item) => ({
    ...item,
    long: calculateDuration(item.from, item.to)
})));

</script>


<template>
    <section class="py-4 relative">
        <div v-motion-slide-visible-once-bottom :delay="500">
            <div class="px-4  py-1 border-b-2 border-[#363030] text-xl">WHAT I DO</div>
            <div  class="px-7 py-2 text-2xl text-justify">
                As a <span class="text-red-500">web developer</span>, I have a passion for seeking knowledge and experience.
                can compete with times that are
                changing too quickly and can work together with a team so that problems can be resolved.
            </div>
            <div  class="px-7 py-2 text-2xl text-justify">
                As a <span class="text-red-500">son</span>, I had dreams to make my parents happy so that I could live
                happily in this world
            </div>
        </div>

        <div v-motion-slide-visible-once-bottom :delay="500">
            <div class="px-4  py-1 border-b-2 border-[#363030] text-xl">MY EXPERIENCES</div>
            <div v-for="item in ex" class="text-2xl py-4 px-7">
                <div class="text-red-500">{{ item.company }}</div>
                <div>{{ item.name }}</div>
                <div class="text-lg">
                    <span>{{ item.from }} <span>to</span> {{ item.to }}</span>
                </div>
                <div class="text-lg">{{ item.long }}</div>
                <div>{{ item.description }}</div>
            </div>
        </div>
    </section>
</template>