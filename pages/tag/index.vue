<template>
      <SectionPage>
        <UiH1>Все теги</UiH1>
        <div class="mt-12 lg:mt-24 flex flex-col gap-0.5">
           <LinkBig to='/tag/1'>
            some tag
            </LinkBig> 
            <LinkBig to='/tag/1'>
            some tag
            </LinkBig> 
            <LinkBig to='/tag/1'>
            some tag
            </LinkBig> 
            <LinkBig to='/tag/1'>
            some tag
            </LinkBig> 
        </div>
    </SectionPage>
</template>
<script setup>
useHead({
    title: "Теги"
})
</script>