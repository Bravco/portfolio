<template>
    <div>
        <NuxtRouteAnnouncer/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        <div id="trailer" class="fixed inset-0 z-10000 flex w-8 h-8 bg-[var(--color-background-primary)] grid place-items-center rounded-full pointer-events-none opacity-0 transition-all duration-200 ease-out">
            <Icon name="fa6-solid:arrow-up-right-from-square" style="color: var(--color-primary);"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    onMounted(() => {
        const trailer: HTMLDivElement | null = document.querySelector("#trailer");

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
                    trailer.style.transform = `translate(${x}px, ${y}px)`;
                    trailer.style.opacity = `${interacting ? "1" : "0"}`;
                    isAnimating = false;
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!e.target) return;

            const interactable = (e.target as HTMLElement).closest(".interactable");
            const interacting: boolean = interactable !== null;

            animateTrailer(e, interacting);
        };

        window.addEventListener("mousemove", handleMouseMove);

        onUnmounted(() => {
            window.removeEventListener("mousemove", handleMouseMove);
        });
    });
</script>