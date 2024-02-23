<template>
    <section>
        <div class="w-full mx-auto max-w-screen-2xl px-8 py-24 mt-24">
                <UiH1>
                    {{ currPost.title }}
                </UiH1>
            <p class="text-xl text-zinc-400"><em>{{ currPost.desc }}</em></p>
            <div class="flex flex-col lg:flex-row gap-8 mt-8">
                <div>
                    <p class="text-base tracking-tighter text-white font-medium">Дата</p>
                    <p class="text-sm text-zinc-400"> {{ currPost.date }} </p>
                </div>
                <div>
                    <p class="text-base tracking-tighter text-white font-medium">
                        Автор
                    </p>
                    <p class="text-sm text-zinc-400"> {{ currPost.author }} </p>
                </div>
                <div>
                    <p class="text-xl tracking-tighter text-white font-medium">Теги</p>
                    <ol role="list" class="flex flex-col lg:flex-row lg:flex-wrap gap-3">
                        <li v-for="item in currPost.tags"> 
                            <NuxtLink :to="'/tag/' + item.tag" class="text-white text-sm hover:underline"> {{ item.text }} </NuxtLink> 
                        </li>
                    </ol>
                </div>
            </div>
            <img class="mt-10 mb-10" src="/images/temp/1.png" alt="#">
            <div class="smart-style" v-html="currPost.body"></div>
        </div>
    </section>
</template>
<script setup>
const {data: posts} = await useTestApi();
const currPost = posts.value[0]
useHead({
    title: currPost.title
})
</script>