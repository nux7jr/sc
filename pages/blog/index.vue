<template>
    <section>
        <BlogWrapper :posts="posts"></BlogWrapper>
    </section>
</template>
<script setup>
const {data: posts} = await useTestApi();
useHead({
    title: "Блог"
})
</script>