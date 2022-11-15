<template>
    <Layout :pages="pages" :title="$page.data.title" :locale="$page.data.locale">
        <div class="flex flex-grow justify-center m-10">
            <PageContent :content="$page.data.content" />
        </div>
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
            hideFromNav
        }
    }
  }
  data: mainPage (path: $path) {
    locale
    title
    content
    path
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
            return this.$page.pages.edges.filter(
                edge => !edge.node.hideFromNav && edge.node.locale === this.$page.data.locale)
        },
    },
};
</script>
