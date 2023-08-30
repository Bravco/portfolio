<template>
    <div>
        <section class="questions">
            <div v-for="question in questions" :key="question.title" class="question-wrapper">
                <div class="question">
                    <div class="question-info">
                        <h2>{{ question.title }}</h2>
                        <p v-html="question.paragraph" class="question-description"/>
                    </div>
                    <div v-if="question.options" class="options">
                        <button 
                            v-for="option in question.options" 
                            :key="option.title" 
                            @click="question.selectedOption = option"
                            :class="['option', { active: option === question.selectedOption }]"
                        >
                            {{ option.title }}
                        </button>
                    </div>
                    <div v-if="question.pageCount || question.pageCount === 0">
                        <v-slider
                            v-model="question.pageCount"
                            :min="0"
                            :max="5"
                            :step="1"
                            hide-details
                            show-ticks="always"
                            class="slider"
                            color="var(--color-primary)"
                        >
                            <template v-slot:prepend>
                                <div>
                                    <span class="page-count">{{ question.pageCount }}</span>
                                    additional pages
                                </div>
                            </template>
                        </v-slider>
                    </div>
                </div>
                <div class="price-wrapper">
                    <span class="question-price">{{ (calculateQuestionPrice(question)/100).toFixed(2) }} €</span>
                </div>
            </div>
            <hr>
            <div class="question-wrapper">
                <div class="btns-wrapper">
                    <NuxtLink class="mail-btn" :to="`mailto:a.hamracek@gmail.com?subject=Website%20purchase&body=${mailBody}`">
                        Send mail
                    </NuxtLink>
                    <NuxtLink class="call-btn" to="tel:+421949725726">
                        Call me
                    </NuxtLink>
                </div>
                <div class="price-wrapper">
                    <span class="total-price">± {{ (calculateTotalPrice()/100).toFixed(2) }} €</span>
                    <p class="price-reminder">
                        <Icon name="fa6-solid:circle-exclamation"/>
                        The final price may vary depending on your requirements.
                        You must contact me for more information.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const questions = ref<any>([
        {
            title: "What kind of development do you prefer?",
            paragraph: "<b>No-code</b> represents <b>Webflow</b> development and <b>Code</b> means the website will be built from scratch.",
            selectedOption: null,
            options: [
                {
                    title: "No-code",
                    price: 5000,
                },
                {
                    title: "Code",
                    price: 10000,
                },
            ],
        },
        {
            title: "What is your website?",
            paragraph: "A <b>Standard</b> website is basically a web design project with content. An <b>Advanced</b> website can use a database, authentication, and other advanced features. An <b>E-commerce</b> website has all the requirements for a store.",
            selectedOption: null,
            options: [
                {
                    title: "Standard",
                    price: 5000,
                },
                {
                    title: "Advanced",
                    price: 10000,
                },
                {
                    title: "E-commerce",
                    price: 20000,
                },
            ],
        },
        {
            title: "How many additional pages do you need?",
            paragraph: "Based on the website type you've chosen, you'll have a default number of pages, but you can add more if you want. <b>+€50/per Additional Page</b>",
            pageCount: 0,
        },
    ]);

    const mailBody = computed(() => {
        return `
Hello,%0A
I would like to purchase a website from you.%0A
Development type: ${questions.value[0].selectedOption ?? "undefined"}%0A
Website type: ${questions.value[1].selectedOption ?? "undefined"}%0A
Additional pages: ${questions.value[2].pageCount}%0A
%0A
`;
    });

    function calculateQuestionPrice(question : any) {
        if (question.selectedOption && question.selectedOption.price) {
            return question.selectedOption.price;
        } else if (question.pageCount) {
            return question.pageCount*5000;
        } else {
            return 0;
        }
    }

    function calculateTotalPrice() {
        let total = 0;

        questions.value.forEach((question : any) => {
            total += calculateQuestionPrice(question);
        });

        return total;
    }
</script>

<style scoped>
    .questions {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .question-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: 3fr 1fr;
    }

    .question-wrapper:last-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }

    .question {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .question-info {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .question-description .icon {
        height: 1rem;
    }

    .options {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .option {
        padding: .5rem 1.25rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: .25rem;
        background-color: rgba(0, 0, 0, .05);
        border: 2px solid transparent;
    }

    .option.active {
        color: var(--color-primary);
        border-color: var(--color-primary);
    }

    .option.active:hover {
        filter: none;
    }

    .slider {
        padding-right: 1rem;
    }

    .page-count {
        font-weight: bold;
    }

    .price-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
    }

    .question-price {
        font-weight: 500;
    }

    .total-price {
        font-size: 1.125rem;
        font-weight: bold;
        color: var(--color-primary);
    }

    .price-reminder {
        display: flex;
        align-items: center;
        gap: .25rem;
        font-size: .75rem;
        color: var(--color-error);
    }

    .btns-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        white-space: nowrap;
    }

    .mail-btn, .call-btn {
        display: grid;
        place-items: center;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        border-radius: .25rem;
    }

    .mail-btn {
        padding: .5rem 3rem;
        color: white;
        background-color: var(--color-primary);
    }

    .call-btn {
        padding: calc(.5rem - 2px) 3rem;
        border: 2px solid var(--color-text);
    }

    @media only screen and (max-width: 768px) {
        .question-wrapper, .question-wrapper:last-child {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }

        .question-wrapper:last-child {
            flex-direction: column-reverse;
        }

        .price-wrapper {
            align-items: flex-start;
        }

        .price-reminder {
            flex-direction: column;
            align-items: flex-start;
        }

        .btns-wrapper {
            flex-wrap: wrap;
        }
    }
</style>