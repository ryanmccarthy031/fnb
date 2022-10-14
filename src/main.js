import DefaultLayout from "~/layouts/Default.vue";

import "@/assets/code-highlight.css";
import "@/assets/styles.css";

export default function(Vue, { head }) {
    Vue.component("Layout", DefaultLayout);
    head.bodyAttrs = {
        class:
            "text-gray-300 bg-gray-900 font-body"
    };
    head.link.push({
        rel: "stylesheet",
        href:
            "https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@500&family=Noto+Sans+Mono&display=swap"
    });
}
