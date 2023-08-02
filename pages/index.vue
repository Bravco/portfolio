<template>
    <div>
        <Hero/>
        <div class="main-grid">
            <div class="selected-work">
                <span class="heading">Selected work</span>
                <div class="project-card-grid">
                    <button class="project-card" aria-label="Select project"></button>
                    <button class="project-card" aria-label="Select project"></button>
                    <button class="project-card" aria-label="Select project"></button>
                </div>
            </div>
            <div class="contact-sidebar">
                <span class="heading">Contact</span>
                <a href="mailto:a.hamracek@gmail.com">a.hamracek@gmail.com</a>
                <a href="tel:+421949725726">+421 949 725 726</a>
                <ul class="social-list">
                    <li class="social-item">
                        <a class="social-link" href="https://github.com/Bravco" target="_blank">
                            <Icon name="mdi:github" size="1.5rem"/>
                        </a>
                    </li>
                    <li class="social-item">
                        <a class="social-link" href="https://twitter.com/bravco_" target="_blank">
                            <Icon name="mdi:twitter" size="1.5rem"/>
                        </a>
                    </li>
                    <li class="social-item">
                        <a class="social-link" href="https://www.instagram.com/bravco_/" target="_blank">
                            <Icon name="mdi:instagram" size="1.5rem"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main-grid {
        width: 100%;
        display: grid;
        -webkit-box-align: start;
        align-items: start;
        grid-template-columns: 3fr 1fr;
        gap: 2rem;
        position: relative;
        padding-top: 4rem;
    }

    .selected-work, .contact-sidebar {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .contact-sidebar {
        position: sticky;
        top: 2rem;
    }

    .heading {
        margin-bottom: .5rem;
        font-size: 1.5rem;
        font-weight: 500;
    }

    .project-card-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    .project-card {
        min-height: 16rem;
        background-color: rgba(0, 0, 0, .1);
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.10);
    }

    .project-card:first-child {
        grid-row: span 2;
    }

    .social-list {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    @media only screen and (max-width: 768px) {
        .main-grid {
            grid-template-columns: auto;
        }

        .contact-sidebar {
            position: static;
        }
    }
</style>