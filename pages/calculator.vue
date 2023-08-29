<template>
    <div>
        <section class="main-wrapper">
            <h1>Determine website cost</h1>
            <div class="questions">
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
                            >
                                <template v-slot:prepend>
                                    <div>
                                        <span class="page-count">{{ question.pageCount }}</span>
                                        pages
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
                    <button class="hire-btn">
                        Hire me
                    </button>
                    <div class="price-wrapper">
                        <span class="total-price">{{ (calculateTotalPrice()/100).toFixed(2) }} €</span>
                    </div>
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
    .main-wrapper {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    h1 {
        text-align: center;
        font-size: 2.5rem;
    }

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
        gap: 1rem;
    }

    .option {
        padding: .5rem 1.25rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: .25rem;
        background-color: rgba(0, 0, 0, .05);
    }

    .option.active {
        color: white;
        background-color: var(--color-primary);
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
        align-items: flex-start;
        justify-content: flex-end;
    }

    .question-price {
        font-weight: 500;
    }

    .total-price {
        font-size: 1.125rem;
        font-weight: bold;
        color: var(--color-primary);
    }

    .hire-btn {
        align-self: start;
        justify-self: start;
        display: grid;
        place-items: center;
        padding: .5rem 3rem;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        color: white;
        background-color: var(--color-primary);
        border-radius: .25rem;
    }
</style>