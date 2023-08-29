<template>
    <div>
        <nuxt-img class="background-wave" src="/images/wave.svg" alt="wave"/>
        <div class="hero">
            <div class="hero-about">
                <nuxt-img class="about-arrow" src="/images/arrow.svg" alt="arrow"/>
                <p class="about-paragraph">I am a creative <span>web developer</span> who turns ideas into visually captivating and functional websites.</p>
                <NuxtLink to="/calculator" class="cta-btn">Get website</NuxtLink>
            </div>
            <div class="hero-visuals">
                <Particles class="particles"/>
                <nuxt-img class="me-img" src="/images/me.webp" alt="me"/>
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
        top: -5.5rem;
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
        display: grid;
        place-items: center;
        position: relative;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        color: white;
    }

    .cta-btn::before, .cta-btn::after {
        content: "";
        position: absolute;
        transition: all 300ms;
    }

    .cta-btn::before {
        top: calc(-2px - .25rem);
        left: calc(-2px - .25rem);
        border: 2px solid white;
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
    }

    .hero-visuals {
        position: relative;
    }

    .me-img {
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

        .me-img {
            width: 100%;
            position: unset;
        }
    }
</style>