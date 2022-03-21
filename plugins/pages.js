module.exports = {
    use: "@gridsome/source-filesystem",
    options: {
        path: "**/*.md",
        baseDir: "content",
        typeName: "MainPage",
        component: "./src/templates/MainPage.vue",
        remark: {
            externalLinksTarget: "_blank",
            externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
    }
};
