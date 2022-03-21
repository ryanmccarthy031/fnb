<template>
    <div class="flex flex-col h-screen">
        <Sidebar
            :showSidebar="showSidebar"
            @toggleSidebar="showSidebar = !showSidebar"
            :pages="pages"
        />
        <Header @toggleSidebar="showSidebar = !showSidebar" :pages="pages" />
        <div class="flex-grow m-10 p-10 bg-white bg-opacity-20">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default {
    data() {
        return {
            showSidebar: false
        };
    },
    components: {
        Header,
        Footer,
        Sidebar
    },
    props: ["pages"]
};
</script>
