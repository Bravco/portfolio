<template>
    <div>
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
                        <nuxt-img class="project-bg" :style="{ 'background-color': project.bgColor }" :src="project.bgUrl" :alt="`${project.title}-image`"/>
                    </button>
                </div>
            </div>
            <div 
                :class="['project-container', { active: selectedProjectId !== null }]"
                :style="projectContainerStyle"
            >
                <button 
                    v-if="lastSelectedProject" 
                    @click="deselectProject" 
                    :class="['icon-btn', { light: lastSelectedProject.isDark }]"
                >
                    <Icon name="fa6-solid:arrow-left" size="1.25rem"/>
                </button>
                <div v-if="lastSelectedProject" class="project-container-content">
                    <div class="project-container-info">
                        <nuxt-img :src="lastSelectedProject.logoUrl" :alt="`${lastSelectedProject.title}-logo`"/>
                        <h1>
                            <NuxtLink class="project-container-link" :to="lastSelectedProject.url" target="_blank">
                                {{ lastSelectedProject.paragraphTitle }}
                                &nbsp;
                                <Icon name="fa6-solid:up-right-from-square"/>
                            </NuxtLink>
                        </h1>
                        <div class="project-container-technologies">
                            <span>Tech stack</span>
                            <div :class="['vl', { light: lastSelectedProject.isDark }]"></div>
                            <ul class="project-container-technologies-list">
                                <li v-for="icon in lastSelectedProject.techIcons">
                                    <Icon :name="icon" size="2rem"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ContentDoc :path="lastSelectedProject.title.toLowerCase()" :head="false"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
    // @ts-ignore
    import ScrollBooster from "scrollbooster";

    const props = defineProps({
        projects: {
            type: Array as PropType<Project[]>,
            required: true,
        },
    });

    const isDragging = ref<boolean>(false);
    const selectedProjectId = ref<number | null>(null);
    const lastSelectedProject = ref<any>(null);
    
    const projectContainerStyle = computed(() => {
        if (lastSelectedProject.value) {
            return {
                "color": lastSelectedProject.value.isDark ? "white" : "var(--color-text)",
                "background-color": lastSelectedProject.value.bgColor,
                "background-image": `url('${lastSelectedProject.value.bgUrl}')`,
                "text-shadow": `1px 1px 2px ${lastSelectedProject.value.isDark ? "black" : "white"}`,
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
                onPointerUp: (state : any) => {
                    isDragging.value = state.isDragging;
                },
            });
        }
    });

    async function selectProject(event : MouseEvent, id : number) {
        if (isDragging.value) return;

        if (process.client) {
            await new Promise<void>((resolve) => {
                const element = document.querySelector(".project-container") as HTMLElement;

                element.style.setProperty("--left-offset", event.clientX + "px");
                element.style.setProperty("--top-offset", event.clientY + "px");

                resolve();
            });
        }

        selectedProjectId.value = id;
        lastSelectedProject.value = props.projects.find((project) => project.id === id);
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
        gap: 2rem;
        user-select: none;
    }

    .project {
        width: 20rem;
        flex: 0 0 auto;
        position: relative;
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
        object-position: right;
        z-index: -1;
    }

    .project-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4rem;
        position: fixed;
        top: calc(var(--top-offset) - 50%);
        left: calc(var(--left-offset) - 50%);
        padding: var(--content-margin);
        background-size: cover;
        background-position: right;
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

    .project-container-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .project-container-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .project-container-link {
        color: inherit;
    }

    .project-container-link:hover {
        filter: none;
        text-decoration: underline;
    }

    .project-container-technologies {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    .project-container-technologies-list {
        display: flex;
        align-items: center;
        gap: .75rem;
    }

    @media only screen and (max-width: 768px) {
        .viewport {
            height: 20rem;
        }

        .content {
            overflow-x: scroll;
        }

        .project {
            width: 16rem;
        }

        .project-container {
            background-position: center;
        }

        .project-container-content {
            width: 100%;
        }
    }
</style>