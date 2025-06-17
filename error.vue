<template>
    <div>
        <section class="h-screen flex flex-col items-center justify-center gap-8">
            <div class="text-center">
                <p>Upps... something went wrong.</p>
                <h1 class="text-xl">Error <span class="font-medium">{{ error.statusCode }}</span></h1>
            </div>
            <button @click="clearError({ redirect: '/' })" class="w-fit primary-btn">
                <Icon name="fa6-solid:arrow-left"/>
                Back to homepage
            </button>
        </section>
    </div>
</template>

<script lang="ts" setup>
    defineProps(["error"]);
</script>