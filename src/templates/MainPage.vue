<template>
    <Layout :pages="pages">
        <h1>{{ $page.data.title }}</h1>
        <PageContent :content="$page.data.content" />
    </Layout>
</template>

<page-query>
query MainPage ($path: String!) {
  pages: allMainPage(sort: [{ by: "priority", order: DESC }]) {
    edges {
        node {
            id
            path
            title
            locale
        }
    }
  }
  data: mainPage (path: $path) {
    title
    content
  }
}
</page-query>

<script>
import PageContent from "@/components/PageContent";

export default {
    components: {
        PageContent
    },
    computed: {
        pages() {
            console.log(this.$i18n.locale);
            return this.$page.pages.edges.filter(
                edge => edge.node.locale === this.$i18n.locale
            );
        }
    },
    metaInfo() {
        return {
            title: this.$page.data.title
        };
    }
};
</script>
