<script setup>
import emailjs from "@emailjs/browser";
import { useToast } from "vue-toastification";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const toast = useToast();

const serviceId = "service_fbbdn6l";
const templateId = "template_kseum7r";
const publicKey = "RP8fxrmCHA1AYJx4V";

const sendEmail = () => {
  emailjs
    .send(
      serviceId,
      templateId,
      {
        name: name.value,
        email: email.value,
        message: message.value,
      },
      publicKey
    )
    .then(
      () => toast.success("Message sent!"),
      (error) => toast.error("Error: " + error.text)
    );
};
</script>

<template>
  <section class="flex justify-center items-center">
    <div class="w-md">
      <form @submit.prevent="sendEmail" class="flex flex-col gap-3">
        <input type="text" v-model="name" placeholder="Your Name" class="border" />
        <input type="email" v-model="email" placeholder="Your Email" class="border" />
        <textarea v-model="message" placeholder="Your Message" class="border"></textarea>
        <button type="submit" class="border cursor-pointer">Send</button>
      </form>
    </div>
  </section>
</template>



