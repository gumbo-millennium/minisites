<template>
    <div>
        <a href="#content" class="sr-only">Door naar inhoud</a>

        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
            <header class="block py-16 lg:py-24">
                <img src="./public/logo.svg" alt="Gumbo Millennium" class="h-64 lg:h-[300px] mx-auto">
            </header>

            <section class="flex flex-col items-center gap-y-4" id="content">
                <h1 class="font-title font-bold text-4xl text-gray-900 sm:text-5xl md:text-6xl text-center">
                    <span class="block">Tijdelijk buiten gebruik</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                    Deze website van Gumbo Millennium is tijdelijk buiten gebruik. We zijn druk bezig met het ontwikkelen van een nieuwe website.
                </p>
                <p class="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                    In de tussentijd, ben je van harte welkom <a href="https://www.gumbo-millennium.nl" class="text-brand-500 underline hover:text-brand-700 hover:no-underline">op onze reguliere website</a>.
                </p>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Tijdelijk buiten gebruik - Gumbo Millennium',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  ],
})
</script>
