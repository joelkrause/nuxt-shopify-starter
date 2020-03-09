<template>
  <main>
    <h1>{{collection.title}}</h1>
    <pre>
      {{collection}}
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
    collections(){
      return this.$store.state.collections;
    },
    collection(){
        return this.collections.find(el => el.handle === this.slug);
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
}
</script>