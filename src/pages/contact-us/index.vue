<script setup>
    import { createClient } from '@supabase/supabase-js';

    definePageMeta({
        layout: 'contact-us',
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
        script: [{ src: 'https://web3forms.com/client/script.js', async: true, defer: true, tagPosition: 'bodyClose' }],
    });

    const supabaseUrl = 'https://mknjdzbldcynsdrhzimx.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rbmpkemJsZGN5bnNkcmh6aW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3MTQyOTQsImV4cCI6MjAwODI5MDI5NH0.PcJuHCCWt2myj11b3GVTayezfoxdROzCR3Zm_AqwdEE';
    const supabase = createClient(supabaseUrl, supabaseKey);
    const supabaseFormData = ref({
        first_name: '',
        last_name: '',
        email: '',
    });
    const formData = ref({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: '',
    });

    async function supabaseFormSubmit() {
        // Validate the Supabase data
        try {
            const hostname = window.location.hostname;
            const isLocalhost = hostname === 'localhost';
            const isInternalIP = hostname.startsWith('192.168.');

            // Set the table name, based on the environment
            const tableName = !isLocalhost && !isInternalIP ? 'prod-contact-us' : 'dev-contact-us';

            // Submit the data to Supabase
            const { data, error } = await supabase.from(tableName).insert([supabaseFormData.value], { returning: 'minimal' });

            // Handle any errors
            if (error) {
                console.error('Data submission unsuccessful:', error);
            } else {
                console.log('Data submission successful');
            }

            // Reset the forms
            formData.value = {};
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    async function submitForms() {
        // Submit the Supabase form, before the Web3Forms form
        try {
            await supabaseFormSubmit();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
</script>

<template>
    <form id="web3forms-form" action="https://api.web3forms.com/submit" method="POST">
        <!-- Hidden fields -->
        <input type="hidden" name="access_key" value="80840c5c-b34e-45ab-bb16-d7029c4f532a" />
        <input type="hidden" name="from_name" value="Support" />
        <input type="hidden" name="redirect" value="http://localhost:3000/contact-us/thank-you" />
        <!-- <input type="hidden" name="redirect" value="https://smeeple.com/contact-us/thank-you" /> -->

        <!-- Input fields -->
        <div class="sm:grid sm:grid-cols-12 sm:gap-3">
            <div class="mb-3 sm:col-span-6">
                <label class="mb-1 inline-block" for="first name">First name<span class="text-orange-light">*</span></label>
                <input v-model="supabaseFormData.first_name" id="first_name" type="text" name="first name" placeholder="John" required />
            </div>

            <div class="mb-3 sm:col-span-6">
                <label class="mb-1 inline-block" for="last name">Last name<span class="text-orange-light">*</span></label>
                <input v-model="supabaseFormData.last_name" id="last_name" type="text" name="last name" placeholder="Smith" required />
            </div>
        </div>

        <div class="mb-3">
            <label class="mb-1 inline-block" for="email">Email<span class="text-orange-light">*</span></label>
            <input v-model="supabaseFormData.email" id="email" type="email" name="email" placeholder="john.smith@domain.com" required />
        </div>

        <div class="mb-3">
            <label class="mb-1 inline-block" for="subject">Subject<span class="text-orange-light">*</span></label>
            <select name="subject">
                <option value="General support">General support</option>
                <option value="Technical issue">Technical issue</option>
                <option value="Helpful feedback">Helpful feedback</option>
                <option value="Feature request">Feature request</option>
                <option value="Other">Other</option>
            </select>
        </div>

        <div class="mb-3">
            <label class="mb-1 inline-block" for="message">Message<span class="text-orange-light">*</span></label>
            <textarea name="message" rows="4" placeholder="Type your message here" required></textarea>
        </div>

        <div v-if="isNotDev" class="h-captcha mb-3" data-captcha="true"></div>

        <button @click="submitForms" class="cta-tertiary" type="submit">
            <div class="flex items-center justify-center">Send</div>
        </button>
    </form>

    <form id="supabase-form" class="hidden" @submit.prevent="supabaseFormSubmit">
        <input v-model="supabaseFormData.first_name" type="text" name="first_name" />
        <input v-model="supabaseFormData.last_name" type="text" name="last_name" />
        <input v-model="supabaseFormData.email" type="email" name="email" />
    </form>
</template>

<script>
    export default {
        computed: {
            isNotDev() {
                const hostname = window.location.hostname;
                const isLocalhost = hostname === 'localhost';
                const isInternalIP = hostname.startsWith('192.168.');

                return !isLocalhost && !isInternalIP;
            },
        },
    };
</script>
