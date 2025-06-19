<template>
    <div>
        <header v-gsap.entrance.slide-top class="max-w-[var(--max-width)] mx-auto px-8 pt-8 mb-32">
            <nav class="flex flex-wrap items-center justify-between">
                <h1 class="text-2xl font-medium">Andrej Hamráček</h1>
                <ul class="flex items-center gap-8">
                    <li>
                        <NuxtLink class="icon-btn" to="mailto:a.hamracek@gmail.com" aria-label="Email">
                            <Icon name="fa6-solid:envelope" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="icon-btn" to="tel:+421949725726" aria-label="Phone Number">
                            <Icon name="fa6-solid:phone" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="icon-btn" to="https://github.com/Bravco" target="_blank" aria-label="GitHub">
                            <Icon name="fa6-brands:github" size="1.25rem"/>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="max-w-[var(--max-width)] mx-auto px-8 flex flex-col gap-32">
            <slot/>
        </main>
        <footer class="relative mt-32 px-8 pb-8 pt-32">
            <NuxtImg class="w-full h-full absolute inset-0 object-cover object-bottom rotate-180 -z-10" src="/images/wave.svg" alt="wave"/>
            <div class="max-w-[var(--max-width)] mx-auto flex flex-wrap items-start justify-between gap-8">
                <div v-gsap.entrance.slide-left class="flex flex-col items-start gap-2">
                    <h1 class="text-2xl font-medium">Andrej Hamráček</h1>
                    <p class="text-xs">&copy; {{ (new Date()).getFullYear() }} Andrej Hamráček | All Rights Reserved.</p>
                </div>
                <div v-gsap.entrance.slide-right class="flex flex-wrap gap-8 text-sm">
                    <ul class="flex flex-col items-start gap-2">
                        <li>
                            <h2 class="!text-[var(--color-text)]">Contact</h2>
                        </li>
                        <li>
                            <NuxtLink class="hover:text-[var(--color-primary)] transition-colors" to="mailto:a.hamracek@gmail.com">a.hamracek@gmail.com</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="hover:text-[var(--color-primary)] transition-colors" to="tel:+421949725726">+421 949 725 726</NuxtLink>
                        </li>
                    </ul>
                    <ul class="flex flex-col items-start gap-2">
                        <li>
                            <h2 class="!text-[var(--color-text)]">Socials</h2>
                        </li>
                        <li>
                            <NuxtLink class="hover:text-[var(--color-primary)] transition-colors" to="https://github.com/Bravco" target="_blank">
                                <Icon name="fa6-brands:github"/>
                                GitHub
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="hover:text-[var(--color-primary)] transition-colors" to="https://leetcode.com/Bravco" target="_blank">
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