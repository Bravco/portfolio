<template>
    <div>
        <header>
            <nav>
                <Logo/>
                <ul class="socials">
                    <li>
                        <NuxtLink class="icon-btn" to="mailto:a.hamracek@gmail.com" target="_blank">
                            <Icon name="fa6-solid:envelope" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="icon-btn" to="tel:+421949725726" target="_blank">
                            <Icon name="fa6-solid:phone" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="icon-btn" to="https://github.com/Bravco" target="_blank">
                            <Icon name="fa6-brands:github" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="icon-btn" to="https://twitter.com/bravco_" target="_blank">
                            <Icon name="fa6-brands:x-twitter" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="icon-btn" to="https://www.instagram.com/bravco_/" target="_blank">
                            <Icon name="fa6-brands:instagram" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <main>
            <slot/>
        </main>

        <footer>
            <p>&copy; 2023 Andrej Hamráček | All Rights Reserved.</p>
        </footer>
    </div>
</template>

<style scoped>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6rem;
    }

    .socials {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    footer {
        margin-top: 6rem;
        text-align: center;
        font-size: .75rem;
    }

    @media only screen and (max-width: 512px) {
        nav {
            flex-direction: column;
            align-items: flex-start;
            gap: .5rem;
        }
    }
</style>