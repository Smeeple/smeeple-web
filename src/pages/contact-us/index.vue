<script setup>
    definePageMeta({
        layout: 'interior',
    });
    useHead({
        title: 'Contact us',
        meta: [
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:url', content: '' },
        ],
        bodyAttrs: { class: 'contact' },
    });
</script>

<template>
    <section class="bg-gray-light bg-[url('/assets/img/bg-shapes-gray.png')]">
        <div class="container">
            <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                    <h1 class="mb-0">Contact us</h1>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                    <form @submit.prevent="submitForm" class="rounded-lg bg-white p-3 shadow-md">
                        <div class="mb-3 grid grid-cols-2 gap-3">
                            <div>
                                <label class="mb-1 inline-block" for="firstName">First name</label>

                                <input v-model="formData.firstName" id="firstName" class="rounded-lg border border-gray-300 p-2 focus:border-green-light focus:outline-none" type="text" required />
                            </div>

                            <div>
                                <label class="mb-1 inline-block" for="lastName">Last name</label>

                                <input v-model="formData.lastName" id="lastName" class="rounded-lg border border-gray-300 p-2 focus:border-green-light focus:outline-none" type="text" required />
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="mb-1 inline-block" for="email">Email</label>

                            <input v-model="formData.email" id="email" class="rounded-lg border border-gray-300 p-2 focus:border-green-light focus:outline-none" type="email" required />
                        </div>

                        <div class="mb-3">
                            <label class="mb-1 inline-block" for="message">Message</label>

                            <textarea v-model="formData.message" id="message" class="rounded-lg border border-gray-300 p-2 focus:border-green-light focus:outline-none" rows="4" required></textarea>
                        </div>

                        <button type="submit" class="cta-tertiary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    message: '',
                },
            };
        },
        methods: {
            async submitForm() {
                try {
                    // Here, you can send the form data to your backend API or perform any necessary actions.
                    console.log('Form data:', this.formData);

                    // Reset the form fields
                    this.formData.name = '';
                    this.formData.email = '';
                    this.formData.message = '';

                    // You can display a success message to the user here
                    alert('Form submitted successfully!');
                } catch (error) {
                    // Handle form submission error
                    console.error('Error submitting form:', error);
                    // You can display an error message to the user here
                    alert('An error occurred while submitting the form.');
                }
            },
        },
    };
</script>
