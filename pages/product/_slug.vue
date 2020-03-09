<template>
  <main>
    <h1>{{product.title}}</h1>
    <h2>${{product.variants[0].price}}</h2>
    
    <form>
      <input type="number" name="qty" min="1" value="1" />
      <button type="button" :data-id="product.id">Add To Cart</button>
    </form>
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
    product(){
        return this.products.find(el => el.handle === this.slug);
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
}
</script>