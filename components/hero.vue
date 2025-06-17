<template>
    <div>
        <section id="hero">
            <NuxtImg class="w-full h-1/2 absolute inset-0 object-cover object-bottom -z-10" src="/images/wave.svg" alt="wave"/>
            <div class="hero flex md:flex-row flex-col gap-16 items-start justify-between">
                <div class="relative flex flex-col items-start gap-8">
                    <NuxtImg class="h-20 absolute -top-24 left-40" src="/images/arrow.svg" alt="arrow"/>
                    <p class="about-paragraph md:w-2/3">I am a creative <span class="text-[var(--color-primary)] font-medium">web developer</span> who turns ideas into visually captivating and functional websites.</p>
                    <NuxtLink 
                        to="#contact" 
                        class="cta-btn relative flex items-center justify-center gap-2 text-[var(--color-background-primary)] uppercase font-medium"
                    >
                        Get website
                        <Icon name="fa6-solid:arrow-turn-down"/>
                    </NuxtLink>
                </div>
                <div class="relative sm:mb-8 sm:mr-8">
                    <Particles class="sm:inline hidden"/>
                    <NuxtImg class="w-full sm:absolute sm:inset-0 sm:top-8 sm:left-8" src="/images/hero.webp" alt="hero"/>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .cta-btn, .cta-btn::before, .cta-btn::after {
        width: 12rem;
        height: 2.5rem;
    }

    .cta-btn::before, .cta-btn::after {
        content: "";
        position: absolute;
        transition: all 300ms;
    }

    .cta-btn::before {
        top: calc(-2px - .25rem);
        left: calc(-2px - .25rem);
        border: 2px solid var(--color-background-primary);
        border-radius: .25rem;
    }

    .cta-btn::after {
        top: .25rem;
        left: .25rem;
        background-color: var(--color-primary);
        border-radius: .25rem;
        z-index: -1;
    }

    .cta-btn:hover::before {
        top: 0;
        left: 0;
    }

    .cta-btn:hover::after {
        top: 0;
        left: 0;
        background-color: var(--color-accent);
    }
</style>