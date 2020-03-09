<template>
  <main>
    <h1>Home</h1>
    <pre>
      {{collections}}
    </pre>
    <Footer />
  </main>
</template>

<script>
// Global
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    collections(){
      return this.$store.state.collections;
    }
  },
}
</script>