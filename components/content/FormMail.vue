
<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
      <div class="flex flex-col w-full p-4 md:w-1/2 lg:w-1/2">
        <h1 class="mb-4 text-3xl font-bold text-center">Contact Me</h1>
        <form @submit.prevent="submitForm" class="flex flex-col">
          <input v-model="name" type="text" placeholder="Your Name" required class="p-2 mb-2 border rounded" />
          <input v-model="email" type="email" placeholder="Your Email" required class="p-2 mb-2 border rounded" />
          <textarea v-model="message" placeholder="Your Message" required class="p-2 mb-2 border rounded"></textarea>
          <button type="submit" class="p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">Send</button>
        </form>
        <div class="mt-4 text-center">
          <h2 class="mb-2 text-lg font-bold">Or connect with me on:</h2>
          <a href="mailto:trong.nguyentech1702@gmail.com" class="block mb-1 text-blue-500 hover:underline">Gmail</a>
          <a href="https://www.linkedin.com/in/tysonnguyensec" class="block text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios';
  
  export default {
    name: 'FormMail',
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      async submitForm() {
        const form = {
          name: this.name,
          email: this.email,
          message: this.message,
        };
  
        try {
          await axios.post('https://formspree.io/f/xoqgrknr', form);
          alert('Message sent!');
        } catch (error) {
          console.error(error);
          alert('An error occurred. Please try again.');
        }
      },
    },
  };
  </script>