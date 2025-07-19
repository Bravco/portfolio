<template>
    <div>
        <section v-gsap.entrance.slide-bottom>
            <div class="flex sm:flex-row flex-col gap-4">
                <div class="text-center relative w-full">
                    <div class="relative flex justify-center">
                        <div class="rounded-full text-center align-middle flex items-center justify-center bg-gray-100 size-10">
                            <div class="flex items-center justify-center size-full">
                                <Icon name="fa6-solid:paintbrush"/>
                            </div>
                        </div>
                        <div role="none" class="sm:inline hidden absolute rounded-full bg-gray-100 top-[calc(50%-2px)] h-0.5 start-[calc(50%+28px)] end-[calc(-50%+28px)]"></div>
                    </div>
                    <div class="mt-2.5">
                        <h3 class="font-medium">Design</h3>
                        <p>Tailored to your needs</p>
                    </div>
                </div>
                <div class="text-center relative w-full">
                    <div class="relative flex justify-center">
                        <div class="rounded-full text-center align-middle flex items-center justify-center bg-gray-100 size-10">
                            <div class="flex items-center justify-center size-full">
                                <Icon name="fa6-solid:code"/>
                            </div>
                        </div>
                        <div role="none" class="sm:inline hidden absolute rounded-full bg-gray-100 top-[calc(50%-2px)] h-0.5 start-[calc(50%+28px)] end-[calc(-50%+28px)]"></div>
                    </div>
                    <div class="mt-2.5">
                        <h3 class="font-medium">Develop</h3>
                        <p>Modern tech stack</p>
                    </div>
                </div>
                <div class="text-center relative w-full">
                    <div class="relative flex justify-center">
                        <div class="rounded-full text-center align-middle flex items-center justify-center bg-gray-100 size-10">
                            <Icon name="fa6-solid:rocket"/>
                        </div>
                    </div>
                    <div class="mt-2.5">
                        <h3 class="font-medium">Deploy</h3>
                        <p>Speed and security</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>