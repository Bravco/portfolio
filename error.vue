<template>
    <div>
        <section>
            <div class="text">
                <h1>{{ error.statusCode }}</h1>
                <p>{{ error.message }}</p>
            </div>
            <button @click="clearError({ redirect: '/' })" class="primary-btn">
                <Icon name="fa6-solid:arrow-left"/>
                Return to home
            </button>
        </section>
    </div>
</template>

<script lang="ts" setup>
    defineProps(["error"]);
</script>

<style scoped>
    section, .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    section {
        height: calc(100dvh - calc(var(--content-margin-vertical) * 2));
        gap: 1rem;
    }
</style>