<script setup>
import { ref } from 'vue';
import { Modal } from 'usemodal-vue3'

let isVisible = ref(false);
</script>

<template>

        <Modal v-model:visible="isVisible" type="clean">
            <div class="bg-cus-med-grey mx-auto rounded-md grid grid-cols-2 gap-4">
                <div class="text-3xl text-center font-bebas m-10">
                    <p class="m-4 text-5xl text-cus-gold">Sign in</p>
                    <form>
                        <div>
                            <label for="email" class="pt-4 pb-1 block text-cus-white">E-Mail</label>
                            <input type="email" id="email" placeholder="name@company.com" class="bg-cus-light-blue rounded-md p-1 text-cus-dark-grey text-xl pr-8">
                        </div>
                        <div>
                            <label for="password" class="pt-4 pb-1 block text-cus-white">Password</label>
                            <input type="password" id="password" placeholder="******" class="bg-cus-light-blue rounded-md p-1 text-cus-dark-grey text-xl pr-8">
                        </div>
                    </form>
                    <button class="bg-cus-gold m-6 p-1 px-4 rounded-md">Log In</button>
                </div>
                <div class="m-10 text-center">
                    <p class="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button class="bg-cus-gold m-4 p-1 px-4 rounded-md font-bebas text-3xl">Sign Up</button>
                </div>
            </div>
        </Modal>


    <button @click="isVisible = !isVisible">Sign in</button>
</template>