<template>
        <SectionPage class="w-full px-8 py-24 mx-auto max-w-screen-2xl mt-24">
            <div class="text-center">
                <UiH1>
                    ПРЕДСТАВЛЕНИЕ
                </UiH1>
            </div>
            <div class="grid grid-cols-1 gap-px gap-y-6 max-w-xl mt-12 mx-auto text-white">
                <ul role="list" class=" flex flex-col gap-12 lg:gap-24">
                    <li>
                        <ul role="list" class="mt-2 flex flex-col gap-px">
                            <li>
                                <LinkSecondary class="w-full" to="/">
                                    home
                                </LinkSecondary>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p class="text-base font-medium tracking-wide uppercase">Blog</p>
                        <ul role="list" class="mt-2 flex flex-col gap-px">
                            <li>
                                <LinkSecondary class="w-full" to="/blog">
                                    blog
                                </LinkSecondary>
                            </li>
                            <li>
                                <LinkSecondary class="w-full" to="/blog/1">
                                    blog 1
                                </LinkSecondary>
                            </li>
                            <li>
                                <LinkSecondary class="w-full" to="/tag">
                                    tags all
                                </LinkSecondary>
                            </li>
                            <li>
                                <LinkSecondary class="w-full" to="/tag/1">
                                    tag category slug
                                </LinkSecondary>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <p class="text-base font-medium tracking-wide uppercase">Infopages</p>
                        <ul role="list" class="mt-2 flex flex-col gap-px">
                            <li>
                                <LinkSecondary class="w-full" to="/about">
                                    about
                                </LinkSecondary>
                            </li>
                            <li>
                                <LinkSecondary class="w-full" to="/team">
                                    team
                                </LinkSecondary>
                            </li>
                            <li>
                                <LinkSecondary class="w-full" to="/policy">
                                    policy
                                </LinkSecondary>
                            </li>
                            <li>
                                <LinkSecondary class="w-full" to="/404">
                                    404
                                </LinkSecondary>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </SectionPage>
</template>
<script setup>
useHead({
    title: "Представление"
})
</script>