<template>
    <div>
        <section class="latest">
            <h2>Latest projects</h2>
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
                <nuxt-img 
                    v-if="lastSelectedProject"
                    class="project-bg" 
                    :src="lastSelectedProject.bgUrl" 
                    :alt="`${lastSelectedProject.title}-image`"
                />
                <nuxt-img 
                    v-if="lastSelectedProject"
                    class="project-bg project-bg-effect" 
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
                        <nuxt-img 
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
                    <div class="paragraph-wrapper">
                        <div class="paragraph-toggle">
                            <button 
                                @click="paragraphMode = ParagraphMode.STORY"
                                :class="['paragraph-toggle-btn', { active: paragraphMode === ParagraphMode.STORY }]"
                            >Story</button>
                            <button 
                                @click="paragraphMode = ParagraphMode.TECH"
                                :class="['paragraph-toggle-btn', { active: paragraphMode === ParagraphMode.TECH }]"
                            >Tech</button>
                        </div>
                        <ContentDoc 
                            :path="`${lastSelectedProject.title.toLowerCase()}-${paragraphMode}`" 
                            :head="false"
                        />
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
    enum ParagraphMode {
        STORY = "story",
        TECH = "tech",
    }

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
    const paragraphMode = ref<ParagraphMode>(ParagraphMode.STORY);
    
    const projectContainerStyle = computed(() => {
        if (lastSelectedProject.value) {
            return {
                "color": lastSelectedProject.value.isDark ? "white" : "var(--color-text)",
                "background-color": lastSelectedProject.value.bgColor,
                //"background-image": `url('${lastSelectedProject.value.bgUrl}')`,
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
    .latest {
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
        max-width: 40%;
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

    .project-bg-effect {
        transform: translate(-1rem, -1rem);
        filter: opacity(.5) blur(1rem);
        z-index: -2;
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
        gap: 4rem;
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
        color: white;
        text-shadow: none;
        background-color: var(--color-success);
        border-radius: .25rem;
    }

    .project-container-status.negative {
        background-color: var(--color-error);
    }

    .project-container-logo {
        max-height: 3rem;
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

    .paragraph-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }

    .paragraph-toggle {
        border-radius: .25rem;
    }

    .paragraph-toggle-btn {
        padding: .25rem 1rem;
        border-radius: .25rem;
        font-size: 1rem;
        font-weight: 500;
        color: inherit;
    }

    .paragraph-toggle-btn.active {
        color: white;
        background-color: var(--color-primary);
    }

    .paragraph-toggle-btn.active:hover {
        filter: none;
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