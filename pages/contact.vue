<template>
    
    <SectionPage class="min-h-screen">
        <UiH1 class="text-center">СВЯЗАТЬСЯ</UiH1>
        <div class="max-w-md mx-auto flex flex-col text-center">        
                <form class="flex flex-col gap-px mx-auto mt-8" action="#" method="POST">
                    <InputText id="name" name="name" required="true" label="Ваше имя" placeholder="Ваше имя"></InputText>
                    <InputText id="email" name="email" required="true" label="Ваш емайл" placeholder="Ваш емайл"></InputText>
                    <InputText id="quest" name="quest" required="true" label="Ваш вопрос" placeholder="Ваш вопрос"></InputText>
                    <div class="py-2"> 
                        <small class="text-xs text-zinc-400 justify-center">
                            Пожалуйста, заполните все поля. Мы не передаём ваши данные.
                        </small> 
                    </div>
                    <div class="flex"> 
                        <button class="w-full" type="submit">
                        <LinkPrimary class="w-full">
                            Отправить
                        </LinkPrimary>
                        </button>
                    </div>
                </form>
            </div>
    </SectionPage>
</template>

<script setup>
useHead({
    title: "Связаться"
})
</script>