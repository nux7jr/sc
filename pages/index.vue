<template>
    <div>
        <SectionPage class="text-center">
            <p class="text-2xl lg:text-7xl tracking-tighter text-white font-medium uppercase special-text">
                Привет от
                <span class="lg:block"></span>
                <span class="highlight">Smart</span>
                core
            </p>
            <div class="max-w-lg mt-12 mx-auto">
                <label for="search" class="sr-only">Быстрый поиск</label>
                <div class="relative inline-flex w-full items-center">
                    <input placeholder="Поиск тем, названий и авторов..." type="text" name="search" id="search"
                        class="block items-center pl-12 w-full rounded-full h-14 border-0 bg-zinc-800  relative  border-trasnparent py-1.5 pr-14 text-white ring-0 ring-inset ring-transparent placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-accent-500 sm:text-sm sm:leading-6">
                    <div class="absolute inset-y-0 left-0 flex py-5 pl-4">
                        <svg class="inline-flex items-center w-4 h-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32">
                            <path fill="currentColor"
                                d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </SectionPage>
        <SectionPage class="mt-0 pt-0">
            <div class="grid grid-cols-1 gap-px gap-y-12 lg:gap-y-24 sm:grid-cols-2 lg:grid-cols-3 mt-6 mx-auto">
                <ArticleSmall></ArticleSmall>
                <ArticleSmall></ArticleSmall>
                <ArticleSmall></ArticleSmall>
                <ArticleSmall></ArticleSmall>
                <ArticleSmall></ArticleSmall>
                <ArticleSmall></ArticleSmall>
            </div>
        </SectionPage>
    </div>
</template>
<script setup>
import { gsap } from 'gsap/all';
onMounted(() => {
    const specialText = document.querySelector('.special-text');
    const smartText = specialText.querySelector('.highlight');

    const letters = smartText.innerText.split('');
    smartText.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');
    
    const spans = smartText.querySelectorAll('span');
    setTimeout(() => {
    spans.forEach((span, index) => {
        gsap.to(span, {
            duration: 0.4,
            color: "#7F4DFF",
            delay: index * 0.2,
        });
    });
    }, 1000)
})
useHead({
    title: "Главная"
})
</script>