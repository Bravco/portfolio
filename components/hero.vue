<template>
    <div>
        <NuxtImg class="background-wave" src="/images/wave.svg" alt="wave"/>
        <div class="hero">
            <div class="hero-about">
                <NuxtImg class="about-arrow" src="/images/arrow.svg" alt="arrow"/>
                <p class="about-paragraph">I am a creative <span>web developer</span> who turns ideas into visually captivating and functional websites.</p>
                <NuxtLink to="#contact" class="cta-btn">
                    Get website
                    <Icon name="fa6-solid:arrow-turn-down"/>
                </NuxtLink>
            </div>
            <div class="hero-visuals">
                <Particles class="particles"/>
                <NuxtImg class="hero-img" src="/images/hero.webp" alt="hero"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .background-wave {
        width: 100%;
        height: 50%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: bottom;
        z-index: -10;
    }

    .hero {
        --hero-margin-bottom: 6rem;

        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-bottom: var(--hero-margin-bottom);
    }

    .hero-about {
        display: flex;
        flex-direction: column;
        justify-self: flex-start;
        align-items: flex-start;
        gap: 2rem;
        position: relative;
    }

    .about-arrow {
        height: 5rem;
        position: absolute;
        top: -6rem;
        right: 2rem;
    }

    .about-paragraph {
        width: 18rem;
    }

    .about-paragraph span {
        font-weight: bold;
        color: var(--color-primary);
    }

    .cta-btn, .cta-btn::before, .cta-btn::after {
        width: 12rem;
        height: 2.5rem;
    }

    .cta-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        position: relative;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        color: var(--color-background-primary);
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
        top: -2px;
        left: -2px;
    }

    .cta-btn:hover::after {
        top: 0;
        left: 0;
        background-color: var(--color-accent);
    }

    .hero-visuals {
        position: relative;
    }

    .hero-img {
        width: 24rem;
        position: absolute;
        bottom: calc(0px - var(--hero-margin-bottom));
        right: 0;
    }

    @media only screen and (max-width: 384px) {
        .about-paragraph {
            width: 100%;
        }
    }

    @media only screen and (max-width: 512px) {
        .hero-visuals {
            display: none;
        }
    }

    @media only screen and (max-width: 768px) {
        .particles {
            display: none;
        }

        .hero-img {
            width: 100%;
            position: unset;
        }
    }
</style>