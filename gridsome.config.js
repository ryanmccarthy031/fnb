// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config
const pages = require("./plugins/pages");
const tailwind = require("./plugins/tailwind");

module.exports = {
    siteName: "Food Not Bombs: Raleigh",
    siteUrl: `https://fnbraleigh.org`,
    host: "0.0.0.0",
    titleTemplate: "%s - FNB",
    siteDescription: "An Autonomous Collective",
    plugins: [pages, tailwind],
    templates: {
        "MainPage": (node) => node.fileInfo.name === 'index'
            ? `/${node.locale}`
            : `/${node.locale}/${node.fileInfo.name}`,
    },
    transformers: {
        remark: {
            plugins: ["@gridsome/remark-prismjs"]
        }
    }
};
