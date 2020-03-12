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
        name: {{this.variantName}}

        <h2 v-if="this.price">${{this.price}}</h2>
        <h2 v-else>${{product.variants[0].price}}</h2>

        <form @submit.prevent="addToCart()">
          <input type="number" v-model="qty" min="1" value="1" />
          <select v-if="product.variants.length > 1" id="product_id" v-model="variantId" @change="setProduct($event)">
            <option v-for="variant in product.variants" :key="variant.index" :data-id="variant.id" :data-name="variant.title" :data-price="variant.price" :value="variant.id">{{variant.title}}</option>
          </select>
          <input v-else type="hidden" v-model="variantId" />
          <button type="submit">Add To Cart</button>
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
    },
  },
  mounted: function() {
    this.variantId = this.product.variants[0].id
    this.productId = this.product.id
    this.price = this.product.variants[0].price
    this.variantName = this.product.variants[0].title
  },
  methods: {
    setProduct(event){
      const price = event.target[event.target.selectedIndex].getAttribute('data-price')
      const name = event.target[event.target.selectedIndex].getAttribute('data-name')
      this.price = price
      this.variantName = name
    },
		addToCart() {
      alert(`adding ${this.variantId}`)
      const lineItemsToAdd = [
        {
          variantId: this.variantId,
          quantity: this.qty
        },
      ];
      const add_item = [{
        variantId: this.variantId,
        productId: this.productId,
        quantity: this.qty,
        price: this.price,
        variantName: this.variantName
      }];
      this.$shopify.checkout.addLineItems(this.$store.state.checkoutID, lineItemsToAdd)
      this.$store.commit('SET_CART', add_item)
		},
  },
  data() {
    return {
      // Form
      qty: 1,
      variantId: '1',
      productId: '',
      variantName: '',

      slug: this.$route.params.slug,
      productId: '',
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