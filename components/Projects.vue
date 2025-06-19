<template>
    <div>
        <section id="projects" class="flex flex-col gap-8">
            <h2>Featured Projects</h2>
            <div id="draggable" class="flex gap-8">
                <NuxtLink 
                    v-for="(project, index) in projects" 
                    :key="index" 
                    :to="project.url"
                    target="_blank"
                    class="interactable relative h-96 aspect-[2/3] p-4 hover:scale-[0.95] transition-transform rounded bg-cover bg-right"
                    :style="{
                        backgroundImage: `url(${project.bgUrl})`,
                        backgroundColor: project.bgColor
                    }"
                >
                    <NuxtImg class="min-h-6" :src="project.logoUrl" :alt="`${project.title} logo`"/>
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    import Draggable from "gsap/Draggable";

    const projects = [
        {
            title: "Brikety Spiš",
            url: "https://briketyspis.sk",
            logoUrl: "/images/projects/briketyspis-logo.webp",
            bgUrl: "/images/projects/briketyspis-background.webp",
            bgColor: "#ffead1"
        },
        {
            title: "Fyzioterapia a masáže",
            url: "https://fyzioterapiaamasaze.sk",
            logoUrl: "/images/projects/fyzioterapia-a-masaze-logo.webp",
            bgUrl: "/images/projects/fyzioterapia-a-masaze-background.webp",
            bgColor: "#f3efec"
        },
        {
            title: "Najlacnejšia Autopožičovňa",
            url: "https://najlacnejsiaautopozicovna.sk",
            logoUrl: "/images/projects/najlacnejsia-autopozicovna-logo.webp",
            bgUrl: "/images/projects/najlacnejsia-autopozicovna-background.webp",
            bgColor: "#ECF1F9"
        },
        {
            title: "Metagem",
            url: "https://metagem.pro",
            logoUrl: "/images/projects/metagem-logo.webp",
            bgUrl: "/images/projects/metagem-background.webp",
            bgColor: "#ebf1fa"
        },
        {
            title: "BadBoys",
            url: "https://badboys.netlify.app",
            logoUrl: "/images/projects/badboys-logo.webp",
            bgUrl: "/images/projects/badboys-background.webp",
            bgColor: "#242424"
        },
        {
            title: "Cowlendar",
            url: "https://bravco.github.io/cowlendar/",
            logoUrl: "/images/projects/cowlendar-logo.webp",
            bgUrl: "/images/projects/cowlendar-background.webp",
            bgColor: "#EDEFFF"
        }
    ];

    onMounted(() => {
        const parent: HTMLElement | null = document.querySelector("#draggable");

        if (!parent) return;

        Draggable.create(parent, {
            type: "x",
            inertia: true,
            bounds: {
                minX: -(parent.scrollWidth - parent.offsetWidth),
                maxX: 0
            }
        });

        const updateBounds = () => {
            const instance = Draggable.get(parent);
            if (instance) {
                instance.applyBounds({
                    minX: -(parent.scrollWidth - parent.offsetWidth),
                    maxX: 0
                });
            }
        };

        window.addEventListener("resize", updateBounds);

        onBeforeUnmount(() => {
            window.removeEventListener("resize", updateBounds);
        });
    });
</script>