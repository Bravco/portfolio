<template>
    <div>
        <Hero/>
        <section class="featured-work">
            <h2>Featured Work</h2>
            <div class="viewport">
                <div class="content">
                    <button v-for="project in projects" :key="project.id" class="project">
                        <nuxt-img class="project-logo" :src="project.logoUrl" :alt="`${project.title}-logo`"/>
                        <nuxt-img class="project-bg" :src="project.bgUrl" :alt="`${project.title}-image`"/>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import ScrollBooster from "scrollbooster";

    const projects = [
        {
            id: 0,
            title: "Metagem",
            logoUrl: "/images/metagem-logo.webp",
            bgUrl: "/images/metagem-background.webp",
        },
        {
            id: 1,
            title: "BadBoys",
            logoUrl: "/images/badboys-logo.webp",
            bgUrl: "/images/badboys-background.webp",
        },
    ];

    onMounted(() => {
        if (process.client) {
            const viewport = document.querySelector(".viewport");
            const content = document.querySelector(".content");

            new ScrollBooster({
                viewport,
                content,
                scrollMode: "transform",
                direction: "horizontal",
                onUpdate: (state) => {
                    content.style.transform = `translate(${-state.position.x}px)`;
                },
            });
        }
    });
</script>

<style scoped>
    .featured-work {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .viewport {
        height: 24rem;
    }

    .content {
        max-width: 320px;
        height: 100%;
        display: flex;
        gap: 1rem;
    }

    .project {
        width: 20rem;
        flex: 0 0 auto;
        position: relative;
        box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, .1);
        transition: transform 300ms;
    }

    .project:hover {
        filter: none;
        transform: translateY(-1rem);
    }

    .project-logo {
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    .project-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: bottom;
        z-index: -1;
    }
</style>