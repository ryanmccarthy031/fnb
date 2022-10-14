<template>
    <header class="fixed top-0 w-screen h-24 px-10 bg-black">
        <div class="flex h-full content-center justify-between">
            <div class="flex items-center">
                <a :href="`/${locale}`" class="w-12 h-12">
                    <img src="../../static/logo.png" alt="Food Not Bombs - Raleigh" />
                </a>
                <span class="font-display ml-4 hidden md:inline">
                    Food Not Bombs - Raleigh
                </span>
            </div>
            <!-- Desktop nav -->
            <nav class="hidden xl:flex items-center">
                <ul class="flex">
                    <li class="list-none ml-8" v-for="(page, index) in pages" :key="`page-${index}`">
                        <g-link class="text-sm no-underline" :to="page.node.path">
                            {{ page.node.title }}
                        </g-link>
                    </li>
                </ul>
            </nav>
            <!-- Mobile nav button -->
            <button @click="$emit('toggleSidebar')" class="xl:hidden outline-none menu-button px-2 py-2">
                <span class="sr-only">Open main menu</span>
                <svg class="w-10 h-10 text-gray-400" x-show="!showMenu" fill="none" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
</template>

<script>

export default {
    data() {
        return {
            logo: require("../../static/logo.png"),
        };
    },
    props: ["pages", "locale"]
};
</script>
