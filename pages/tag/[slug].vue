<template>
    <SectionPage>
      <UiH1>Блоги с тегом: <span class="text-accent-500">SomeTag</span> 
      </UiH1>
      <section>
        <BlogWrapper :posts="posts"></BlogWrapper>
    </section>
  </SectionPage>
</template>
<script setup>
const {data: posts} = await useTestApi();

useHead({
    title: "SLUG TAG"
})
</script>