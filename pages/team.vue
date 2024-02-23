<template>
    <SectionPage>
        <UiH1>Команда</UiH1>
        <div class="mx-auto mt-12 text-grey">
            <p> Наша команда руководила и реализовывала крупномасштабные проекты по программному обеспечению и дизайну.</p>
        </div>
        <div>
            <ul role="list" class="grid gap-0.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
                <li v-for="index in 10" :key="index">
                    <div class="flex flex-col items-center gap-4 text-center p-8 bg-accent-500 rounded-4xl">
                        <img
                            class="object-cover w-10 h-10 rounded-full lg:h-20 lg:w-20" src="/images/temp/profile.jpg"
                            alt="profile">
                        <div class="space-y-1">
                            <h3 class="text-lg font-semibold leading-6 font-serif text-white"> Алексей Диль </h3>
                            <p class="text-base text-grey">CEO </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </SectionPage>
</template>
<script setup>
useHead({
    title: "Команда"
})
</script>