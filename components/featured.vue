<template>
    <div>
        <section>
            <h2>Featured projects</h2>
            <div class="viewport-wrapper">
                <div class="viewport">
                    <div class="content">
                        <button 
                            v-for="project in projects" 
                            :key="project.id"
                            @click="selectProject($event, project.id)" 
                            :id="`project-${project.id}`"
                            class="project"
                        >
                            <NuxtImg class="project-logo" :src="project.logoUrl" :alt="`${project.title}-logo`"/>
                            <NuxtImg class="project-bg" :style="{ 'background-color': project.bgColor }" :src="project.bgUrl" :alt="`${project.title}-image`"/>
                        </button>
                    </div>
                </div>
            </div>
            <div 
                :class="['project-container', { active: selectedProjectId !== null }]"
                :style="projectContainerStyle"
            >
                <NuxtImg 
                    v-if="lastSelectedProject"
                    class="project-bg" 
                    :src="lastSelectedProject.bgUrl" 
                    :alt="`${lastSelectedProject.title}-image`"
                />
                <button 
                    v-if="lastSelectedProject" 
                    @click="deselectProject" 
                    :class="['icon-btn', { light: lastSelectedProject.isDark }]"
                >
                    <Icon name="fa6-solid:arrow-left" size="1.25rem"/>
                </button>
                <div v-if="lastSelectedProject" class="project-container-content">
                    <div class="project-container-info">
                        <span 
                            :class="['project-container-status', { negative: lastSelectedProject.status.negative }]"
                        >{{ lastSelectedProject.status.message }}</span>
                        <NuxtImg 
                            class="project-container-logo" 
                            :src="lastSelectedProject.logoUrl" 
                            :alt="`${lastSelectedProject.title}-logo`"
                        />
                        <h1>
                            <NuxtLink class="project-container-link" :to="lastSelectedProject.url" target="_blank">
                                {{ lastSelectedProject.paragraphTitle }}
                                &nbsp;
                                <Icon name="fa6-solid:up-right-from-square"/>
                            </NuxtLink>
                        </h1>
                        <div class="project-container-tech">
                            <span>Tech stack</span>
                            <div :class="['vl', { light: lastSelectedProject.isDark }]"></div>
                            <ul class="project-container-tech-list">
                                <li v-for="icon in lastSelectedProject.techIcons">
                                    <Icon :name="icon" size="2rem"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="paragraph-wrapper">
                        <ContentDoc 
                            :path="`${lastSelectedProject.id}`" 
                            :head="false"
                        ><template #not-found/></ContentDoc>
                        <NuxtLink 
                            v-if="lastSelectedProject.githubRepoUrl" 
                            class="paragraph-github-link" 
                            :to="lastSelectedProject.githubRepoUrl" 
                            target="_blank"
                        >
                            GitHub repository
                            <Icon name="fa6-solid:arrow-right"/>
                        </NuxtLink>
                    </div>
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
    const selectedProjectId = ref<string | null>(null);
    const lastSelectedProject = ref<any>(null);
    
    const projectContainerStyle = computed(() => {
        if (lastSelectedProject.value) {
            return {
                "color": lastSelectedProject.value.isDark ? "var(--color-background-primary)" : "var(--color-text)",
                "background-color": lastSelectedProject.value.bgColor,
                "text-shadow": `1px 1px 2px ${lastSelectedProject.value.isDark ? "var(--color-text)" : "var(--color-background-primary)"}`,
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

    async function selectProject(event : MouseEvent, id : string) {
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
    h2 {
        margin-bottom: 27rem;
    }

    .viewport-wrapper {
        width: 100%;
        position: absolute;
        left: 0;
        transform: translateY(-25rem);
        overflow: hidden;
        padding-top: 1rem;
        margin-top: -1rem;
    }

    .viewport {
        height: 24rem;
        margin-inline: var(--content-margin-horizontal);
        cursor: grab;
    }

    .content {
        width: max-content;
        height: 100%;
        display: flex;
        gap: 2rem;
        user-select: none;
    }

    .project {
        aspect-ratio: 5/6;
        flex: 0 0 auto;
        position: relative;
        transition: transform 200ms;
    }

    .project:hover {
        filter: none;
        transform: translateY(-1rem);
    }

    .project-logo {
        width: 33.33%;
        height: 2rem;
        object-fit: contain;
        object-position: left;
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
        border-radius: .25rem;
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
        overflow-y: auto;
        pointer-events: all;
        transform: scale(1);
        top: 0;
        left: 0;
    }

    .project-container-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .project-container-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .project-container-status {
        padding: .25rem .5rem;
        font-size: .75rem;
        font-weight: 500;
        color: var(--color-background-primary);
        text-shadow: none;
        background-color: var(--color-success);
        border-radius: .25rem;
    }

    .project-container-status.negative {
        background-color: var(--color-error);
    }

    .project-container-logo {
        width: 33.33%;
        height: 2rem;
        object-fit: contain;
        object-position: left;
    }

    .project-container-link {
        color: inherit;
    }

    .project-container-link:hover {
        filter: none;
        text-decoration: underline;
    }

    .project-container-tech {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    .project-container-tech-list {
        display: flex;
        align-items: center;
        gap: .75rem;
    }

    .paragraph-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }

    .paragraph-github-link {
        color: inherit;
        font-weight: 500;
    }

    .paragraph-github-link:hover {
        filter: none;
        text-decoration: underline;
    }

    @media only screen and (max-width: 768px) {
        .viewport {
            height: 20rem;
        }

        .project-container {
            background-position: center;
        }

        .project-container-content {
            width: 100%;
        }
    }
</style>