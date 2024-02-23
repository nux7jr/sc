<template>
    <section class="relative overflow-hidden">
        <div class="w-full relative px-8 py-24 mx-auto max-w-screen-2xl items-center flex flex-col h-screen justify-center">
            <div class="max-w-xl mx-auto text-center">
                <h1 class="text-2xl lg:text-7xl tracking-tighter text-white font-medium uppercase">
                    Мы сожалеем!
                </h1>
                <p class="max-w-sm mt-4 text-lg text-zinc-400 mx-auto">
                    Страница, которую вы ищете, возможно, была перемещена или удалена.
                </p>
                <div class="flex mt-12">
                    <NuxtLink to="/"
                        class="pl-4 lg:pl-12 lg:text-4xl pr-2 bg-zinc-800 border-zinc-900 duration-200 hover:border-zinc-900 h-12 lg:h-24 text-white justify-between uppercase border-2 rounded-full inline-flex items-center w-full">
                        Главная
                        <div
                            class="bg-white h-8 w-8 lg:h-20 lg:w-20 text-black inline-flex items-center justify-center rounded-full">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                    <path fill="currentColor"
                                        d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"></path>
                                </svg>
                            </span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
useHead({
    title: "404"
})
</script>
