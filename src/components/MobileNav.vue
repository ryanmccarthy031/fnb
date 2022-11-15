<template>
    <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0"
        enter-to-class="transform opacity-100" leave-active-class="transition ease-in duration-100"
        leave-class="transform opacity-100" leave-to-class="transform opacity-0">
        <div v-if="showSidebar" class="fixed top-24 z-50 font-display">
            <div class="bg-black">
                <nav class="w-screen flex flex-col items-center">
                    <ul class="w-full">
                        <li class="flex w-full list-none m-0 text-center" @click="$emit('toggleSidebar')"
                            v-for="(page, index) in pages" :key="`page-${index}`">
                            <g-link class="p-4 w-full text-sm no-underline" :to="page.node.path">
                                {{ page.node.title }}
                            </g-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div @click="$emit('toggleSidebar')" :class="{ hidden: !showSidebar }" class="h-screen w-screen" />
        </div>
    </transition>
</template>

<script>
export default {
    props: ["pages", "showSidebar"]
};
</script>
