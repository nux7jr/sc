<template>
    <div class="w-full mx-auto max-w-screen-2xl px-8 py-24">
            <ul class="grid grid-cols-1 gap-8 gap-y-32  md:grid-cols-2 xl:grid-cols-3 mx-auto">
                <li v-for="item in posts"> 
                    <ArticleBig :post="item"></ArticleBig>
                </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    posts: {
        type: Object,
        required: true,
    }
})
</script>