<template>
    <div class="footer-wrapper p-8 flex flex-col max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-px">
            <div class="text-base tracking-wide uppercase text-black font-medium p-8 bg-accent-500 rounded-3xl">
                <p class="text-xs">
                    Copyright © {{ currentDate.getFullYear() }} Smart Core. Все права защищены.</p>
            </div>
            <div class="grid grid-cols-1 gap-px sm:grid-cols-3 text-black">
                <ul role="list" class="p-8 bg-accent-600 rounded-4xl">
                    <li>
                        <p class="text-zinc-300 font-medium tracking-wide uppercase">
                            Навигация
                        </p>
                        <ul role="list" class="mt-4">
                            <li>
                                <NuxtLink class="hover:underline text-grey" to="/overview">
                                    Представление
                                </NuxtLink>
                            </li>
                            <li> 
                                <NuxtLink class="hover:underline text-grey" to="/style">
                                    Стайлгайд
                                </NuxtLink> 
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul role="list" class="p-8 bg-accent-600 rounded-4xl">
                    <li>
                        <p class="text-zinc-300 font-medium tracking-wide uppercase">
                            Оставаться в курсе
                        </p>
                        <ul role="list" class="mt-4">
                            <li>
                                <NuxtLink class="hover:underline text-grey" to="/blog">
                                    Блог
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="hover:underline text-grey"
                                    to="/team">Команда
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul role="list" class="p-8 bg-accent-600 rounded-4xl">
                    <li>
                        <p class="text-zinc-300 font-medium tracking-wide uppercase">
                            Соц сети
                        </p>
                        <ul role="list" class="mt-4">
                            <li>
                                <NuxtLink class="hover:underline text-grey" href="https://t.me/warm_ice_cream">
                                    @warm_ice_cream
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="col-span-full">
                <div class="mt-6 flex flex-col gap-px"> <label for="email-address" class="sr-only">
                        Адрес электронной почты
                    </label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required
                        class="block items-center px-12 text-center w-full rounded-full h-14 border-0 bg-zinc-900 relative border-trasnparent py-1.5 lg:h-24 text-zinc-300 ring-0 ring-inset ring-transparent lg:text-4xl placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-accent-500 sm:text-sm sm:leading-6"
                        placeholder="Адрес электронной почты">
                    <button type="submit"
                        class="pl-4 lg:pl-12 lg:text-4xl pr-2 bg-zinc-900 border-zinc-900 duration-200 hover:border-zinc-900 h-12 lg:h-24 text-zinc-300 justify-between uppercase border-2 rounded-full inline-flex items-center">
                        Подписаться
                        <div
                            class="bg-white h-8 w-8 lg:h-20 lg:w-20 text-black inline-flex items-center justify-center rounded-full">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32">
                                    <path fill="currentColor"
                                        d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"></path>
                                </svg>
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <svg class="logo-svg order-first mt-20 mb-20" xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%"
            viewBox="0 0 1487.000000 174.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,174.000000) scale(0.100000,-0.100000)" fill="#7F4DFF" stroke="none">
                <path class="path"
                d="M512 1729 c-188 -29 -356 -140 -428 -282 -51 -100 -66 -239 -38 -357 19 -84 50 -136 118 -197 70 -64 171 -113 326 -158 261 -76 318 -95 357 -124 48 -35 67 -77 61 -135 -7 -61 -41 -104 -107 -135 -51 -23 -67 -25 -181 -25 -87 0 -145 6 -190 18 -76 21 -194 74 -263 118 -26 17 -49 29 -51 27 -1 -2 -28 -67 -59 -143 l-57 -140 27 -23 c48 -39 205 -111 288 -133 276 -70 537 -46 711 65 209 134 289 399 186 618 -69 148 -175 208 -545 311 -234 65 -278 96 -284 193 -7 106 55 169 192 194 123 23 320 -17 454 -92 29 -17 54 -29 56 -27 5 4 105 281 105 289 0 16 -175 92 -265 115 -114 29 -307 40 -413 23z" />
                <path class="path"
                d="M1500 870 l0 -840 160 0 160 0 0 493 c1 389 3 489 13 476 7 -9 107 -190 222 -402 l210 -386 81 -1 81 0 219 409 219 409 3 -499 2 -499 165 0 165 0 0 840 0 841 -147 -3 -146 -3 -276 -517 c-206 -387 -279 -514 -286 -504 -6 7 -134 241 -285 520 l-274 506 -143 0 -143 0 0 -840z" />
                <path class="path"
                d="M3698 870 l-336 -840 180 2 180 3 66 178 67 177 351 0 351 0 38 -103 c21 -56 51 -137 67 -179 l30 -78 179 0 c98 0 179 3 179 8 0 4 -150 380 -334 837 l-334 830 -174 3 -173 2 -337 -840z m631 134 c61 -165 111 -305 111 -312 0 -9 -59 -12 -235 -12 -148 0 -235 4 -235 10 0 24 234 630 240 623 4 -4 57 -143 119 -309z" />
                <path class="path"
                    d="M5210 871 l0 -841 175 0 175 0 0 235 0 235 163 0 163 0 144 -235 145 -235 189 0 188 0 -14 23 c-40 60 -318 507 -318 510 0 2 31 25 70 51 66 46 140 129 176 199 52 100 72 335 39 462 -53 205 -201 350 -420 412 -51 14 -122 17 -467 21 l-408 3 0 -840z m793 499 c57 -21 113 -73 143 -130 11 -23 19 -65 22 -120 5 -110 -19 -180 -82 -238 -67 -62 -115 -72 -338 -72 l-188 0 0 290 0 290 195 0 c170 0 201 -3 248 -20z" />
                <path class="path"
                    d="M6612 1553 l3 -158 243 -3 242 -2 0 -680 0 -680 170 0 170 0 0 680 0 680 243 2 242 3 3 158 3 157 -661 0 -661 0 3 -157z" />
                <path class="path"
                d="M9297 1724 c-321 -58 -572 -312 -642 -649 -18 -91 -21 -300 -5 -385 53 -281 227 -513 462 -619 112 -50 189 -65 343 -65 164 0 249 19 377 86 75 38 207 148 229 190 9 16 -5 35 -97 133 l-106 114 -57 -57 c-67 -66 -133 -105 -216 -127 -257 -67 -516 97 -580 367 -17 75 -19 226 -4 300 49 234 245 399 472 398 115 -1 238 -53 326 -138 l54 -53 109 108 c59 59 108 113 108 119 0 21 -125 136 -195 179 -161 100 -372 136 -578 99z" />
                <path class="path"
                d="M10857 1724 c-154 -28 -287 -96 -404 -207 -134 -128 -217 -283 -249 -469 -22 -123 -14 -320 16 -432 73 -270 276 -493 520 -570 373 -118 749 7 954 318 97 148 146 315 146 506 0 560 -450 950 -983 854z m268 -329 c214 -56 345 -233 361 -490 23 -363 -248 -632 -568 -564 -71 15 -160 61 -213 110 -216 199 -219 621 -7 828 116 113 273 156 427 116z"/>
                <path class="path--d-svg"
                    d="M12110 879 l0 -840 433 4 c472 4 476 4 602 66 74 36 142 101 196 183 72 113 74 124 74 553 0 330 -2 388 -17 443 -28 99 -68 171 -137 245 -51 54 -82 77 -155 112 -138 68 -197 75 -632 75 l-364 0 0 -841z m813 488 c31 -16 69 -44 83 -63 51 -66 53 -84 54 -453 0 -329 -1 -347 -21 -388 -25 -52 -66 -88 -139 -122 -52 -25 -65 -26 -247 -29 l-193 -4 0 547 0 546 203 -3 c199 -3 203 -3 260 -31z" />
                <path class="path path--r-svg"
                    d="M12110 871 l0 -841 170 0 170 0 2 233 3 232 161 3 160 2 145 -234 144 -235 188 -1 189 0 -23 38 c-13 20 -88 140 -166 265 -79 126 -143 230 -143 232 0 2 23 18 52 35 164 101 251 275 251 500 0 299 -155 506 -438 587 -51 14 -122 17 -462 21 l-403 3 0 -840z m771 504 c71 -25 112 -59 144 -116 28 -50 30 -61 30 -159 0 -121 -15 -160 -84 -223 -63 -57 -114 -67 -333 -67 l-188 0 0 290 0 290 194 0 c149 0 204 -4 237 -15z" />
                <path class="path"
                    d="M13690 870 l0 -840 585 0 585 0 0 155 0 155 -410 0 -410 0 0 195 0 195 350 0 350 0 0 150 0 150 -350 0 -350 0 0 185 0 185 400 0 400 0 0 155 0 155 -575 0 -575 0 0 -840z" />
            </g>
        </svg>
    </div>
</template>
<script setup>
const currentDate = new Date();
import { gsap } from 'gsap/all'

const isAnimatePlay = ref(false);

async function animateLetters(allPath) {
    await gsap.to(allPath, {
        duration: 0.7,
        fill: "black",
        ease: "power4.out",
        stagger: 0.1,
    });
    gsap.set('.path--d-svg', {
        y: 2000,
    });
    await gsap.to('.path--r-svg', {
        duration: 1,
        y: -2000,
        ease: "power4.out",
        repeat: 0,
    }).finished;
    await gsap.to('.path--d-svg', {
        duration: 1,
        y: 0,
        display: "block",
        ease: "power4.out",
        repeat: 0,
    }).finished;
}

async function animateLettersBackward() {
    await gsap.to('.path--d-svg', {
        duration: 1,
        y: 2000,
        ease: "power4.out",
        repeat: 0,
    }).finished;
    await gsap.to('.path--r-svg', {
        duration: 1,
        y: 0,
        ease: "power4.out",
        repeat: 0,
    }).finished;
}

async function initAnimation(allPath) {
    isAnimatePlay.value = true;
    await animateLetters(allPath); 
    await new Promise(resolve => setTimeout(resolve, 2000));
    await animateLettersBackward(); 
    isAnimatePlay.value = false;
}
function throttle(func, delay) {
    let timeoutId;
    return function(...args) {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func(...args);
                timeoutId = null;
            }, delay);
        }
    };
}
onMounted(async () => {
    const allPath = document.querySelectorAll('.path');
    const footer = document.querySelector('.footer-wrapper')

    const handleScroll = throttle(() => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const pageHeight = document.body.offsetHeight;

        if (scrollPosition >= pageHeight * 0.8 && !isAnimatePlay.value) {
            initAnimation(allPath);
        }
    }, 250);

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
});
</script>
<style scoped>
.path--d-svg {
    display: none;
    fill: black;
}
</style>