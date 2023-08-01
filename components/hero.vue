<template>
    <div>
        <nuxt-img class="background-wave" src="/images/wave.svg" alt="wave"/>
        <div class="hero">
            <div class="hero-about">
                <nuxt-img class="about-arrow" src="/images/arrow.svg" alt="arrow"/>
                <p class="about-paragraph">I am a creative <span>web developer</span> who turns ideas into visually captivating and functional websites.</p>
                <a class="hire-btn" href="mailto:a.hamracek@gmail.com" aria-label="Hire me">HIRE ME</a>
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
        height: 50vh;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: bottom;
        z-index: -10;
    }

    .hero {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
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

    .hire-btn, .hire-btn::before, .hire-btn::after {
        width: 12rem;
        height: 2.5rem;
    }

    .hire-btn {
        display: grid;
        place-items: center;
        position: relative;
        font-size: 1.125rem;
        font-weight: 500;
        color: white;
    }

    .hire-btn::before, .hire-btn::after {
        content: "";
        position: absolute;
        transition: all 300ms;
    }

    .hire-btn::before {
        top: calc(-2px - .25rem);
        left: calc(-2px - .25rem);
        border: 2px solid white;
    }

    .hire-btn::after {
        top: .25rem;
        left: .25rem;
        background-color: var(--color-primary);
        z-index: -1;
    }

    .hire-btn:hover::before {
        top: -2px;
        left: -2px;
    }

    .hire-btn:hover::after {
        top: 0;
        left: 0;
    }

    .hero-visuals {
        position: relative;
    }

    .me-img {
        width: 24rem;
        position: absolute;
        bottom: -6rem;
        right: 0;
    }

    @media only screen and (max-width: 384px) {
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