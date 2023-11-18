<template>
    <Hero/>
    <Featured :projects="featuredProjects"/>
</template>

<script lang="ts" setup>
    const featuredProjects : Project[] = [
        {
            id: "najlacnejsia-autopozicovna",
            isDark: false,
            title: "Najlacnejšia Autopožičovňa",
            url: "https://najlacnejsia-autopozicovna.netlify.app",
            logoUrl: "/images/najlacnejsia-autopozicovna-logo.webp",
            bgUrl: "/images/najlacnejsia-autopozicovna-background.webp",
            bgColor: "#ECF1F9",
            paragraphTitle: "A website for local car rental business.",
            techIcons: [
                "logos:nuxt-icon",
                "logos:google-gmail",
                "logos:netlify-icon",
            ],
            githubRepoUrl: "https://github.com/Bravco/car-rental",
            status: {
                message: "Published",
                negative: false,
            },
        },
        {
            id: "portfolio",
            isDark: false,
            title: "Portfolio",
            url: "/",
            logoUrl: "/images/portfolio-logo.webp",
            bgUrl: "/images/portfolio-background.webp",
            bgColor: "#dbf0ff",
            paragraphTitle: "A personal portfolio website to illustrate my web development work.",
            techIcons: [
                "logos:nuxt-icon",
                "logos:netlify-icon",
            ],
            githubRepoUrl: "https://github.com/Bravco/portfolio",
            status: {
                message: "Published",
                negative: false,
            },
        },
        {
            id: "metagem",
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
                message: "Published",
                negative: false,
            },
        },
        {
            id: "badboys",
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
                message: "Completed",
                negative: false,
            },
        },
        {
            id: "cowlendar",
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
                message: "Not completed",
                negative: true,
            },
        },
    ];
</script>