module.exports = {
    use: "@gridsome/source-filesystem",
    options: {
        path: "**/*.md",
        baseDir: "content",
        typeName: "MainPage",
        remark: {
            externalLinksTarget: "_blank",
            externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
    }
};
