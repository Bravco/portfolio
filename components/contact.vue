<template>
    <div>
        <section id="contact">
            <h2>Contact me</h2>
            <form class="contact-form" @submit.prevent="submit">
                <div class="inputfield">
                    <label for="firstName">First Name</label>
                    <input v-model="state.firstName" type="text" name="firstName" id="firstName" placeholder="" required>
                </div>
                <div class="inputfield">
                    <label for="lastName">Last Name</label>
                    <input v-model="state.lastName" type="text" name="lastName" id="lastName" placeholder="" required>
                </div>
                <div class="inputfield">
                    <label for="email">Email</label>
                    <input v-model="state.email" type="email" name="email" id="email" placeholder="" required>
                </div>
                <div class="inputfield">
                    <label for="phone">Phone</label>
                    <input v-model="state.phone" type="tel" name="phone" id="phone" placeholder="" required>
                </div>
                <textarea v-model="state.message" class="wide" name="message" id="message" rows="8" placeholder="Tell me about your website ..." required/>
                <button class="primary-btn wide" type="submit">Send website request</button>
                <span v-if="success" class="success wide">Your website request has been successfully sent!</span>
            </form>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const runtimeConfig = useRuntimeConfig();

    const success = ref<boolean>(false);
    const state = reactive({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    async function submit() {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: runtimeConfig.public.WEB3FORMS_ACCESS_KEY,
                from_name: "hamracek.dev",
                subject: "New Website Request",
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                phone: state.phone,
                message: state.message,
            }),
        });

        const result = await response.json();
        if (result.success) success.value = true;
    }
</script>

<style scoped>
    .contact-form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        place-items: center;
    }

    .contact-form > * {
        width: 100%;
    }

    .inputfield {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .inputfield label {
        position: absolute;
        top: 50%;
        left: .75rem;
        padding-inline: .25rem;
        transform: translateY(-50%);
        font-size: 1rem;
        pointer-events: none;
        opacity: .75;
        transition-property: top, font-size, background-color, opacity;
        transition-duration: 300ms;
    }

    .inputfield:has(input:focus) label, .inputfield:has(input:not(:placeholder-shown)) label {
        top: 0;
        font-size: .75rem;
        background-color: white;
        opacity: 1;
    }

    .wide {
        grid-column: span 2;
    }

    button[type="submit"] {
        width: 50%;
        margin-top: 1rem;
    }

    .success {
        text-align: center;
        color: var(--color-success);
    }

    @media only screen and (max-width: 768px) {
        .contact-form {
            display: flex;
            flex-direction: column;
        }

        button[type="submit"] {
            width: 100%;
        }
    }
</style>