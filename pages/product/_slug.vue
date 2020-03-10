<template>
  <main>
    <section class="product_header">
      <div class="product_header-images">
        <div class="image" v-for="image in product.images" :key="image.index">
          <img :src="image.src" />
        </div>
      </div>
      <div class="product_header-info">
        <h1>{{product.title}}</h1>
        <h2>${{product.variants[0].price}}</h2>

        <form>
          <input type="number" name="qty" min="1" value="1" />
          <select v-if="product.variants.length > 1" id="product_id">
            <option v-for="variant in product.variants" :key="variant.index" :value="variant.id">{{variant.title}}</option>
          </select>
          <input v-else type="hidden" :value="product.variants[0].id" />
          <button type="button" :data-id="product.id">Add To Cart</button>
        </form>
      </div>
    </section>
    <div v-html="product.descriptionHtml"></div>
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

<style lang="scss" scoped>
.product_header{
  display: flex;
  &-images,&-info{
    width: 50%;
  }
  &-images {
    img{
      width: 25vw;
    }
  }
}
</style>