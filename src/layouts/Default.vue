<template>
  <div>
    <Sidebar
      :showSidebar="showSidebar"
      @toggleSidebar="showSidebar=!showSidebar"
      :pages="pages" />
    <div class="min-h-screen flex flex-col">
      <Header @toggleSidebar="showSidebar=!showSidebar" />
      <slot class="content" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"

export default {
  data () {
    return {
      showSidebar: false,
    }
  },
  props: ['pages'],

  components: {
    Header,
    Footer,
    Sidebar,
  },
  mounted () {
    if (!this.$route.path.includes(this.$context.locale)) {
      this.$router.push({
          path: this.$tp(this.$route.path, this.$context.locale, true)
      })
    }
  },
}

</script>