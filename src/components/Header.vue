<template>
    <header class="w-screen p-4 bg-black">
        <div class="flex h-full content-center justify-between">
            <div class="flex items-center">
                <g-link :to="$tp('/')" class="w-12">
                    <img src="../../static/logo.png" :alt="$t('siteName')" />
                </g-link>
                <span class="font-display ml-4 text-xl hidden md:inline">
                    {{ $t("siteName") }}
                </span>
            </div>
            <!-- Desktop nav -->
            <nav class="hidden md:flex items-center">
                <ul class="flex">
                    <li
                        class="list-none ml-8"
                        v-for="(page, index) in pages"
                        :key="`page-${index}`"
                    >
                        <g-link
                            class="text-lg  no-underline"
                            :to="$tp(page.node.path, $i18n.locale, true)"
                        >
                            {{ page.node.title }}
                        </g-link>
                    </li>
                    <li class="list-none ml-8">
                        <language-selector />
                    </li>
                </ul>
            </nav>
            <!-- Mobile nav button -->
            <button
                @click="$emit('toggleSidebar')"
                class="md:hidden outline-none menu-button px-2 py-2"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-10 h-10 text-gray-400"
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
</template>

<script>
import LanguageSelector from "./LanguageSelector.vue";

export default {
    data() {
        return {
            logo: require("../../static/logo.png"),
            settings: require("../../data/theme.json")
        };
    },
    components: { LanguageSelector },
    props: ["pages"]
};
</script>
