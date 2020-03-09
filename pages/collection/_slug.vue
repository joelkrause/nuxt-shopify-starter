<template>
  <main>
    <h1>{{collection.title}}</h1>
    <div class="products">
      <div class="collection" v-for="product in collection.products" :key="product.index">
        <nuxt-link :to="`/product/${product.handle}`">{{product.title}}</nuxt-link>
      </div>
    </div>
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
    products(){
      return this.$store.state.products;
    },
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