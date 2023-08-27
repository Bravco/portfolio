<template>
    <div>
        <Hero/>
        <Featured :projects="featuredProjects"/>
    </div>
</template>

<script lang="ts" setup>
    const featuredProjects : Project[] = [
    {
            id: 0,
            isDark: false,
            title: "Metagem",
            url: "https://metagem.pro",
            logoUrl: "/images/metagem-logo.webp",
            bgUrl: "/images/metagem-background.webp",
            bgColor: "#ebf1fa",
            paragraphTitle: "An AI powered web app used to generate custom metadata for SEO optimization.",
            techIcons: [
                "logos:nuxt-icon",
                "logos:openai-icon",
                "logos:firebase",
                "logos:stripe",
            ],
        },
        {
            id: 1,
            isDark: true,
            title: "BadBoys",
            url: "https://badboys.netlify.app",
            logoUrl: "/images/badboys-logo.webp",
            bgUrl: "/images/badboys-background.webp",
            bgColor: "#242424",
            paragraphTitle: "A fully functional website for a local pizzeria called BadBoys.",
            techIcons: [
                "logos:nuxt-icon",
                "logos:supabase-icon",
            ],
        },
    ];
</script>