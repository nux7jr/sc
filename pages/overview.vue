<template>
    <section>
        <div class="w-full px-8 py-24 mx-auto max-w-screen-2xl mt-24">
            <div class="text-center">
                <h1 class="text-3xl tracking-wide uppercase text-white font-medium">
                    Overview
                </h1>
            </div>
            <div class="grid grid-cols-1 gap-px gap-y-6 max-w-xl mt-12 mx-auto text-white">
                <ul role="list" class=" flex flex-col gap-12 lg:gap-24">
                    <li>
                        
                        <ul role="list" class="mt-2 flex flex-col gap-px">
                            <li> 
                                <NuxtLink class="pl-4 pr-2 w-full duration-200 hover:border-accent-500 border-zinc-800 h-12 text-white justify-between uppercase border-2 rounded-full inline-flex items-center bg-zinc-800"
                                    to="/">Home
                                    <div
                                        class="bg-white h-8 w-8 text-black inline-flex items-center justify-center rounded-full">
                                        <span> 
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                                <path fill="currentColor"
                                                    d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z">
                                            </path>
                                        </svg>
                                    </span> 
                                </div>
                            </NuxtLink> 
                        </li>
                        
                       
                        
                    </ul>
                </li>
                        
                <li>
                    <p class="text-base font-medium tracking-wide uppercase">Blog</p>
                    <ul role="list" class="mt-2 flex flex-col gap-px">
                        <li> <NuxtLink class="pl-4 pr-2 w-full duration-200 hover:border-accent-500 border-zinc-800 h-12 text-white justify-between uppercase border-2 rounded-full inline-flex items-center bg-zinc-800"
                                to="/blog/blog">Blog <div
                                    class="bg-white h-8 w-8 text-black inline-flex items-center justify-center rounded-full">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                            <path fill="currentColor"
                                                d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z">
                                            </path>
                                        </svg></span> </div></NuxtLink> </li>
                        <li> <NuxtLink class="pl-4 pr-2 w-full duration-200 hover:border-accent-500 border-zinc-800 h-12 text-white justify-between uppercase border-2 rounded-full inline-flex items-center bg-zinc-800"
                                to="/posts/1">Blog posts <div
                                    class="bg-white h-8 w-8 text-black inline-flex items-center justify-center rounded-full">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                            <path fill="currentColor"
                                                d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z">
                                            </path>
                                        </svg></span> </div></NuxtLink> </li>
                        <li> <NuxtLink class="pl-4 pr-2 w-full duration-200 hover:border-accent-500 border-zinc-800 h-12 text-white justify-between uppercase border-2 rounded-full inline-flex items-center bg-zinc-800"
                                to="/tags">Tag index <div
                                    class="bg-white h-8 w-8 text-black inline-flex items-center justify-center rounded-full">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                            <path fill="currentColor"
                                                d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z">
                                            </path>
                                        </svg></span> </div></NuxtLink> </li>
                        <li> <NuxtLink class="pl-4 pr-2 w-full duration-200 hover:border-accent-500 border-zinc-800 h-12 text-white justify-between uppercase border-2 rounded-full inline-flex items-center bg-zinc-800"
                                to="/tags/Tailwind">Tag Category <div
                                    class="bg-white h-8 w-8 text-black inline-flex items-center justify-center rounded-full">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                            <path fill="currentColor"
                                                d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z">
                                            </path>
                                        </svg></span> </div> </NuxtLink> </li>
                        
                    </ul>
                </li>
                <li>
                    <p class="text-base font-medium tracking-wide uppercase">Infopages</p>
                    <ul role="list" class="mt-2 flex flex-col gap-px">
                        <li> <NuxtLink class="pl-4 pr-2 w-full duration-200 hover:border-accent-500 border-zinc-800 h-12 text-white justify-between uppercase border-2 rounded-full inline-flex items-center bg-zinc-800"
                                to="/infopages/about">About
                                <div
                                    class="bg-white h-8 w-8 text-black inline-flex items-center justify-center rounded-full">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                            <path fill="currentColor"
                                                d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z">
                                            </path>
                                        </svg></span> </div>
                            </NuxtLink> </li>
                        <li> <NuxtLink class="pl-4 pr-2 w-full duration-200 hover:border-accent-500 border-zinc-800 h-12 text-white justify-between uppercase border-2 rounded-full inline-flex items-center bg-zinc-800"
                                to="/infopages/terms">Terms of service
                                <div
                                    class="bg-white h-8 w-8 text-black inline-flex items-center justify-center rounded-full">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                            <path fill="currentColor"
                                                d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z">
                                            </path>
                                        </svg></span> </div>
                            </NuxtLink> </li>
                        <li> <NuxtLink class="pl-4 pr-2 w-full duration-200 hover:border-accent-500 border-zinc-800 h-12 text-white justify-between uppercase border-2 rounded-full inline-flex items-center bg-zinc-800"
                                to="/infopages/privacy">Privacy policy
                                <div
                                    class="bg-white h-8 w-8 text-black inline-flex items-center justify-center rounded-full">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                            <path fill="currentColor"
                                                d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z">
                                            </path>
                                        </svg></span> </div>
                            </NuxtLink> </li>
                        <li> <NuxtLink class="pl-4 pr-2 w-full duration-200 hover:border-accent-500 border-zinc-800 h-12 text-white justify-between uppercase border-2 rounded-full inline-flex items-center bg-zinc-800"
                                to="/404">404
                                <div
                                    class="bg-white h-8 w-8 text-black inline-flex items-center justify-center rounded-full">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                            <path fill="currentColor"
                                                d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z">
                                            </path>
                                        </svg></span> </div>
                            </NuxtLink> </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</section>
</template>
<script setup>
useHead({
    title: "Представление"
})
</script>