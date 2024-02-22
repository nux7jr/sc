<template>
    <NuxtLink class="pl-4 lg:pl-12 lg:text-4xl pr-2 bg-zinc-800 border-zinc-800 duration-200 hover:border-accent-500 h-12 lg:h-24 text-white justify-between uppercase border-2 rounded-full inline-flex items-center w-full"
    :to="props.to">
        <slot></slot>
        <div class="bg-white h-8 w-8 lg:h-20 lg:w-20 text-black inline-flex items-center justify-center rounded-full">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                    <path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"></path>
                </svg>
            </span>
        </div>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    to: {
        type: String,
    }
})
</script>