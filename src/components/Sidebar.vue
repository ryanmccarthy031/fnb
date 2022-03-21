<template>
    <div
        :class="{ '-translate-x-full': !showSidebar }"
        class="transition-transform transform fixed z-50 font-display"
    >
        <div
            @click="$emit('toggleSidebar')"
            :class="{ hidden: !showSidebar }"
            class="absolute w-screen h-screen top-0 left-0 cursor-pointer"
        />
        <div class="sticky top-0 bottom-0 left-0 right-40 bg-gray-900">
            <nav class="h-screen w-full flex flex-col items-center">
                <g-link :to="$tp('/')" class="block w-32 p-4">
                    <img
                        src="../../static/logo.png"
                        :alt="settings.site_name"
                    />
                </g-link>
                <ul>
                    <li
                        class="list-none p-4"
                        @click="$emit('toggleSidebar')"
                        v-for="(page, index) in pages"
                        :key="`page-${index}`"
                    >
                        <g-link
                            class="text-xl no-underline"
                            :to="$tp(page.node.path, $i18n.locale, true)"
                        >
                            {{ page.node.title }}
                        </g-link>
                    </li>
                    <li class="list-none p-4">
                        <language-selector />
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import LanguageSelector from "./LanguageSelector.vue";
export default {
    components: { LanguageSelector },
    data() {
        return {
            logo: require("../../static/logo.png"),
            settings: require("../../data/theme.json")
        };
    },
    props: ["pages", "showSidebar"]
};
</script>
