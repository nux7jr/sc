<template>
    
    <NuxtLink :to="props.to" class="py-1 pl-4 duration-200 pr-2 border-accent-500 bg-accent-500 hover:text-black h-12 hover:bg-white text-white justify-between uppercase border-2 hover:border-white rounded-full inline-flex items-center gap-12">
        <slot></slot>
        <div class="bg-black h-8 w-8 text-white inline-flex items-center justify-center rounded-full"
            ><span >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32"
                    >
                    <path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"
                        ></path>
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