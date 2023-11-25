<template>
    <div>
        <header>
            <nav>
                <Logo/>
                <ul class="socials">
                    <li>
                        <NuxtLink class="icon-btn" to="mailto:a.hamracek@gmail.com">
                            <Icon name="fa6-solid:envelope" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="icon-btn" to="tel:+421949725726">
                            <Icon name="fa6-solid:phone" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="icon-btn" to="https://github.com/Bravco" target="_blank">
                            <Icon name="fa6-brands:github" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <slot/>
        </main>
        <footer>
            <NuxtImg class="background-wave" src="/images/wave.svg" alt="wave"/>
            <div class="footer-content">
                <div class="footer-list">
                    <Logo/>
                    <p class="copyright">&copy; 2023 Andrej Hamráček | All Rights Reserved.</p>
                </div>
                <div class="footer-links">
                    <ul class="footer-list">
                        <li>
                            <h3>Contact</h3>
                        </li>
                        <li>
                            <NuxtLink to="mailto:a.hamracek@gmail.com">a.hamracek@gmail.com</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="tel:+421949725726">+421 949 725 726</NuxtLink>
                        </li>
                    </ul>
                    <ul class="footer-list">
                        <li>
                            <h3>Socials</h3>
                        </li>
                        <li>
                            <NuxtLink to="https://github.com/Bravco" target="_blank">
                                <Icon name="fa6-brands:github"/>
                                GitHub
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="https://leetcode.com/Bravco" target="_blank">
                                <Icon name="simple-icons:leetcode"/>
                                LeetCode
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    nav, .footer-content {
        margin-inline: var(--content-margin-horizontal);
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6rem;
        margin-top: var(--content-margin-vertical);
    }

    .socials {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    footer {
        --footer-margin-top: 8rem;
        position: relative;
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        text-align: center;
        margin-top: calc(var(--footer-margin-top) * 2);
        font-size: .875rem;
    }

    footer .background-wave {
        width: 100%;
        height: calc(100% + var(--content-margin-vertical) + var(--footer-margin-top));
        position: absolute;
        left: 0;
        bottom: 0;
        transform: rotate(180deg) translateY(calc(var(--content-margin-vertical) * -1));
        object-fit: cover;
        object-position: bottom;
        z-index: -10;
    }

    .footer-links {
        display: flex;
        gap: 4rem;
    }

    .footer-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
    }

    .copyright {
        font-size: .75rem;
    }

    @media only screen and (max-width: 512px) {
        nav {
            flex-direction: column;
            align-items: flex-start;
            gap: .5rem;
        }

        .footer-links {
            flex-direction: column;
            gap: 2rem;
        }
    }

    @media only screen and (max-width: 768px) {
        .footer-content {
            flex-wrap: wrap;
            gap: 4rem;
        }
    }
</style>