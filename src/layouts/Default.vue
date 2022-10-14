<template>
    <div class="min-h-screen flex flex-col pt-24">
        <Header @toggleSidebar="showSidebar = !showSidebar" :pages="pages" :title="title" :locale="locale" />
        <MobileNav :showSidebar="showSidebar" @toggleSidebar="showSidebar = !showSidebar" :pages="pages" :title="title"
            :locale="locale" />
        <slot />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default {
    data() {
        return {
            showSidebar: false
        };
    },
    components: {
        Header,
        Footer,
        MobileNav,
    },
    props: ["pages", "title", "locale"]
};
</script>
