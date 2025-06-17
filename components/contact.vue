<template>
    <div>
        <section id="contact" class="flex flex-col gap-8">
            <h2>Get website</h2>
            <form @submit.prevent="submit" class="md:grid grid-cols-2 flex flex-col gap-4 place-items-center">
                <div class="inputfield">
                    <label for="firstName">First Name</label>
                    <input v-model="state.firstName" type="text" name="firstName" id="firstName" placeholder=" " required>
                </div>
                <div class="inputfield">
                    <label for="lastName">Last Name</label>
                    <input v-model="state.lastName" type="text" name="lastName" id="lastName" placeholder=" " required>
                </div>
                <div class="inputfield">
                    <label for="email">Email</label>
                    <input v-model="state.email" type="email" name="email" id="email" placeholder=" " required>
                </div>
                <div class="inputfield">
                    <label for="phone">Phone</label>
                    <input v-model="state.phone" type="tel" name="phone" id="phone" placeholder=" " required>
                </div>
                <textarea v-model="state.message" class="col-span-2" name="message" id="message" rows="8" placeholder="Tell me about your website ..." required/>
                <div class="mt-4 col-span-2 grid place-items-center">
                    <span v-if="!loading && success" class="flex items-center justify-center gap-2 text-[var(--color-success)]">
                        <Icon name="fa6-solid:envelope-circle-check"/>
                        Your website request has been successfully sent.
                    </span>
                    <span v-if="!loading && error" class="flex items-center justify-center gap-2 text-[var(--color-error)]">
                        <Icon name="fa6-solid:circle-exclamation"/>
                        Something went wrong.
                    </span>
                    <button v-if="!success && !error" class="primary-btn md:!w-1/2" type="submit" :disabled="loading">
                        <Icon :name="loading ? 'eos-icons:loading' : 'fa6-solid:envelope'" size="1.25rem"/>
                        <span v-if="!loading">Send website request</span>
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const runtimeConfig = useRuntimeConfig();

    const loading = ref<boolean>(false);
    const success = ref<boolean>(false);
    const error = ref<boolean>(false);
    const state = reactive({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    async function submit() {
        loading.value = true;

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
        if (result.success) {
            success.value = true;
            loading.value = false;
        } else {
            error.value = true;
            loading.value = false;
        }
    }
</script>

<style scoped>
    form > * {
        width: 100%;
    }
</style>