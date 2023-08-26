<template>
    <div>
        <Hero/>
        <section class="featured-work">
            <h2>Featured Work</h2>
            <div class="viewport">
                <div class="content">
                    <button 
                        v-for="project in projects" 
                        :key="project.id"
                        @click="selectProject($event, project.id)" 
                        :id="`project-${project.id}`"
                        class="project"
                    >
                        <nuxt-img class="project-logo" :src="project.logoUrl" :alt="`${project.title}-logo`"/>
                        <nuxt-img class="project-bg" :src="project.bgUrl" :alt="`${project.title}-image`"/>
                    </button>
                </div>
            </div>
            <div 
                :class="['project-container', { active: selectedProjectId !== null }]"
                :style="projectContainerStyle"
            >
                <button @click="deselectProject" class="back-btn">
                    <Icon name="fa6-solid:arrow-left" size="1.25rem"/>
                </button>
                <div v-if="lastSelectedProject" class="project-container-content">
                    <div class="project-container-info">
                        <nuxt-img :src="lastSelectedProject.logoUrl" :alt="`${lastSelectedProject.title}-logo`"/>
                        <NuxtLink to="">
                            AI generator used to create suited metadata for SEO optimization.
                            <Icon name="fa6-solid:up-right-from-square"/>
                        </NuxtLink>
                        <div class="project-container-technologies">
                            <span>Tech stack</span>
                            <div class="vl"></div>
                            <ul>
                                <li v-for="_ in 3">
                                    <Icon name="devicon:nuxtjs" size="2rem"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p class="project-container-description"></p>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
    // @ts-ignore
    import ScrollBooster from "scrollbooster";

    const projects = [
        {
            id: 0,
            isDark: false,
            title: "Metagem",
            logoUrl: "/images/metagem-logo.webp",
            bgUrl: "/images/metagem-background.webp",
        },
        {
            id: 1,
            isDark: true,
            title: "BadBoys",
            logoUrl: "/images/badboys-logo.webp",
            bgUrl: "/images/badboys-background.webp",
        },
    ];

    const selectedProjectId = ref<number | null>(null);
    const lastSelectedProject = ref<any>(null);
    
    const projectContainerStyle = computed(() => {
        if (lastSelectedProject.value) {
            return {
                "color": lastSelectedProject.value.isDark ? "white" : "var(--color-text)",
                "background-image": `url('${lastSelectedProject.value.bgUrl}')`,
            };
        } else {
            return {};
        }
    });

    onMounted(() => {
        if (process.client) {
            const viewport = document.querySelector(".viewport") as HTMLElement;
            const content = document.querySelector(".content") as HTMLElement;

            new ScrollBooster({
                viewport,
                content,
                scrollMode: "transform",
                direction: "horizontal",
                onUpdate: (state : any) => {
                    content.style.transform = `translate(${-state.position.x}px)`;
                },
            });
        }
    });

    async function selectProject(event : MouseEvent, id : number) {
        if (process.client) {
            await new Promise<void>((resolve) => {
                const element = document.querySelector(".project-container") as HTMLElement;

                element.style.setProperty("--left-offset", event.clientX + "px");
                element.style.setProperty("--top-offset", event.clientY + "px");

                resolve();
            });
        }

        selectedProjectId.value = id;
        lastSelectedProject.value = projects.find((project) => project.id === id);
    }

    function deselectProject() {
        selectedProjectId.value = null;
    }
</script>

<style scoped>
    .featured-work {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .viewport {
        height: 24rem;
        cursor: grab;
    }

    .content {
        height: 100%;
        display: flex;
        gap: 1rem;
        user-select: none;
    }

    .project {
        width: 20rem;
        flex: 0 0 auto;
        position: relative;
        box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, .1);
        transition: all 300ms;
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

    .project-container {
        width: 100%;
        height: 100%;
        position: fixed;
        top: calc(var(--top-offset) - 50%);
        left: calc(var(--left-offset) - 50%);
        padding: var(--content-margin);
        background-size: cover;
        background-position: center;
        z-index: 10;
        pointer-events: none;
        transform: scale(0);
        transition-property: transform, top, left;
        transition-duration: 300ms;
    }

    .project-container.active {
        pointer-events: all;
        transform: scale(1);
        top: 0;
        left: 0;
    }
    .back-btn {
        display: grid;
        place-items: center;
        color: inherit;
    }

    @media only screen and (max-width: 768px) {
        .viewport {
            height: 20rem;
        }

        .project {
            width: 16rem;
        }
    }
</style>