<template>
    <div>
        <NuxtRouteAnnouncer/>
        <NuxtLayout>
            <Hero/>
            <Projects/>
            <Contact/>
        </NuxtLayout>
        <div id="trailer" class="fixed inset-0 z-10000 w-4 h-4 backdrop-blur-xs grid place-items-center rounded-full pointer-events-none opacity-0 transition-all duration-150 ease-out">
            <Icon data-type="link" id="trailer-icon" class="opacity transition-opacity" :name="trailerIconName" size="0.5em" style="color: var(--color-primary);"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Draggable from "gsap/Draggable";
    import InertiaPlugin from "gsap/InertiaPlugin";

    const gsap = useGSAP();

    const trailerIconName: string = ref<string>("");

    const getTrailerIconName = (type: string | null) => {
        switch (type) {
            case "link":
            case "button":
                return "iconamoon:cursor-fill";

            case "text":
                return "mdi:cursor-text";

            case "project":
                return "fa6-solid:arrow-up-right-from-square";

            default:
                return "";
        }
    };

    onBeforeMount(() => {
        gsap.registerPlugin(Draggable, InertiaPlugin);
    });

    onMounted(() => {
        const trailer: HTMLDivElement | null = document.querySelector("#trailer");
        const trailerIcon: HTMLElement | null = document.querySelector("#trailer-icon");

        let x = 0;
        let y = 0;
        let isAnimating = false;

        const animateTrailer = (e: MouseEvent, interacting: boolean) => {
            if (!trailer) return;

            x = e.clientX - trailer.offsetWidth / 2;
            y = e.clientY - trailer.offsetHeight / 2;

            if (!isAnimating) {
                isAnimating = true;
                requestAnimationFrame(() => {
                    trailer.style.transform = `translate(${x}px, ${y}px) scale(${interacting ? '2' : '1'})`;
                    trailer.style.backgroundColor = interacting ? "rgba(255,255,255,0.5)" : "var(--color-text)";
                    trailerIcon.style.opacity = interacting ? "1": "0";
                    isAnimating = false;
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (trailer) {
                if (!trailer.style.opacity) {
                    trailer.style.opacity = "1";
                }
            }

            if (!e.target) return;

            const interactable = (e.target as HTMLElement).closest(".interactable");
            const interacting: boolean = interactable !== null;

            animateTrailer(e, interacting);
            trailerIconName.value = interacting ? getTrailerIconName(interactable.dataset.type) : "";
        };

        const handleMouseEnter = () => {
            if (trailer) {
                trailer.style.opacity = "1";
            }
        };

        const handleMouseLeave = () => {
            if (trailer) {
                trailer.style.opacity = "0";
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        onUnmounted(() => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
        });
    });
</script>