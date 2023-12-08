<script setup>
const waiting = ref(false);


const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const submit = (form) => {
    waiting.value = true;
    window.open(`mailto:wildy13.simanjuntak13@gmail.com?subject=${form.subject}&&body=${form.message}`)
}
</script>

<template>
    <section class="relative h-screen pt-4">
        <div class="px-4 py-1 border-b-2 border-[#363030] text-xl">GET IN TOUCH</div>
        <div class="flex flex-col md:flex-row md:justify-between h-5/6">
            <div class="w-full">
                <form @submit.prevent="submit(form)" class="pt-2">
                    <div class="flex flex-col px-7 space-y-2">
                        <div>
                            <div>
                                <label for="name" class="block mb-2 font-medium">Full Name</label>
                                <input type="text" id="name"
                                    class="bg-[#262626]  text-gray-400  rounded-lg block w-full p-2.5"
                                    placeholder="John" required v-model="form.name">
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 font-medium">Email</label>
                            <input type="email" id="email"
                                class="bg-[#262626]  text-gray-400  rounded-lg block w-full p-2.5"
                                placeholder="Jhon@example.com" required v-model="form.email">
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 font-medium">Subject</label>
                            <input id="subject" class="bg-[#262626]  text-gray-400  rounded-lg block w-full p-2.5"
                                placeholder="Subject" required v-model="form.subject">
                        </div>
                        <div>
                            <label for="message" class="block mb-2 font-medium">Message</label>
                            <textarea name="message" id="message" rows="4"
                                class="w-full rounded-lg text-gray-400 bg-[#262626] p-2.5"
                                placeholder="How can i help you?" required v-model="form.message"></textarea>
                        </div>
                        <div class="w-full flex  justify-center">
                            <button type="submit" class="w-32 py-1 rounded-lg hover:focus:ring-blue-500">
                                <template v-if="waiting">
                                    loading...
                                </template>
                                <template v-if="!waiting">
                                    Send
                                </template>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class=" w-full px-7 pt-2">
                <div class="flex  flex-row space-x-4 justify-center">
                    <IconFacebook />
                    <IconInstagram />
                    <IconLinkedin />
                </div>
            </div>
        </div>
    </section>
</template>