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

        <h2 v-if="this.price">${{this.price}}</h2>
        <h2 v-else>${{product.variants[0].price}}</h2>

        <form>
          <input type="number" name="qty" min="1" value="1" />
          <select v-if="product.variants.length > 1" id="product_id" @change="setProduct($event)">
            <option v-for="variant in product.variants" :key="variant.index" :data-id="variant.id" :data-price="variant.price" :value="variant.id">{{variant.title}}</option>
          </select>
          <input v-else type="hidden" :value="product.variants[0].id" />
          <button type="button" :data-id="product.id">Add To Cart</button>
        </form>
        <div v-html="product.descriptionHtml"></div>
      </div>
    </section>
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
  methods: {
    setProduct(event){
      const price = event.target[event.target.selectedIndex].getAttribute('data-price')
      this.price = price
    }
  },
  data() {
    return {
      slug: this.$route.params.slug,
      price: ''
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