<template>
    <div>
        <label :for="id" class="sr-only">{{label}}</label>
        <div>
            <input :id="id" :name="name" type="text" :placeholder="placeholder" :required="required"
                class="block items-center px-4 ring-offset-zinc-800 w-full text-center rounded-full h-14 border-0 bg-zinc-800 relative border-trasnparent py-1.5 text-white ring-0 ring-inset ring-white placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-accent-500 sm:text-sm sm:leading-6">
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['id', 'name', 'required', 'label', 'placeholder' ])
</script>