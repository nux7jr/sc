<template>
    <div class="group">
        <NuxtLink to="/blog/1" class="hover:opacity-80 duration-200">
            <div class="border border-zinc-800 group-hover:grayscale overflow-hidden rounded-4xl">
                <img src="/images/temp/1.png" alt="Carriera">
            </div>
        </NuxtLink>
        <div class="flex flex-col uppercase mt-2 text-center">
            <p class="text-white text-sm">Carriera</p>
            <p class="text-zinc-400 text-xs mt-1">
                Added on Sat Jul 01 </p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    post: {
        type: Object,
    }
})
</script>