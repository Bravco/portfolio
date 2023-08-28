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
            githubRepoUrl: "https://github.com/Bravco/metagem",
            status: {
                message: "Deployed",
                negative: false,
            },
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
                "logos:netlify-icon",
            ],
            githubRepoUrl: "https://github.com/Bravco/badboys",
            status: {
                message: "Finished",
                negative: false,
            },
        },
        {
            id: 2,
            isDark: false,
            title: "Cowlendar",
            url: "https://bravco.github.io/cowlendar/",
            logoUrl: "/images/cowlendar-logo.webp",
            bgUrl: "/images/cowlendar-background.webp",
            bgColor: "#EDEFFF",
            paragraphTitle: "An application that helps farmers manage the gravidity of cows on the farm.",
            techIcons: [
                "logos:flutter",
                "logos:vue",
                "logos:nodejs-icon",
                "logos:firebase",
            ],
            githubRepoUrl: "https://github.com/Bravco/cowlendar",
            status: {
                message: "Unfinished",
                negative: true,
            },
        },
    ];
</script>