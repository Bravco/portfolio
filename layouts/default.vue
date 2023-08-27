<template>
    <div>
        <header>
            <nav>
                <h1>Andrej Hamráček</h1>
                <ul class="socials">
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
</style>