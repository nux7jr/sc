<template>
    <NuxtLink :to="'/blog/' + post.title" :title="post.title" class="group">
        <article class="flex-1 h-full flex flex-col ">
            <div class="flex flex-col items-end h-full items ">
                <div> 
                    <img class="aspect-[384/246] object-cover  bg-center h-full group-hover:grayscale"
                        src="/images/temp/1.png" alt="Carbon Research's latest analog AI chip for deep learning inference">
                </div>
                <div class="flex flex-col items-start justify-between w-full mt-4">
                    <div class="flex flex-col   text-lg font-medium text-accent-500 ">
                        <p> {{ post.author }} </p>
                    </div>
                    <p class="text-3xl text-white mt-2 line-clamp-3 group-hover:underline">{{ post.title }}</p>
                </div>
            </div>
        </article>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    post: {
        type: Object,
    }
})
</script>