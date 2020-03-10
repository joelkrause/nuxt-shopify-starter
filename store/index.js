export const state = () => ({
  products: [],
  collections: [],
  cartContents: [],
  checkoutID: '',
  checkoutURL: '',
  cart: [],
  cartToggle: false
})

export const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.products = products
  },
  SET_COLLECTIONS: (state, collections) => {
    state.collections = collections
  },
  SET_CHECKOUT_ID: (state, checkoutID) => {
    state.checkoutID = checkoutID
  },
  SET_CHECKOUT_URL: (state, checkoutURL) => {
    state.checkoutURL = checkoutURL
  },
  SET_CART: (state, add_item) => {
    state.cart.push(add_item)
  },
  TOGGLE_CART: (state,cartToggle) => {
    state.cartToggle = !state.cartToggle
  }
}

export const actions = {
  async fetchAllProducts({
    commit
  }) {
    const products = await this.$shopify.product.fetchAll();
    commit('SET_PRODUCTS', products)
  },
  async fetchAllCollections({
    commit
  }) {
    const collections = await this.$shopify.collection.fetchAllWithProducts().then(collections => {
      commit('SET_COLLECTIONS', collections)
    });
  },
  async setCheckoutID({
    commit
  }) {
    const checkout_id = await this.$shopify.checkout.create().then(checkout => {
      commit('SET_CHECKOUT_URL', checkout.webUrl)
      commit('SET_CHECKOUT_ID', checkout.id)
    });
  },
  async getCart({
    commit
  }) {
    const cart = await this.$shopify.checkout.fetch(this.$store.state.checkoutID).then(checkout => {
      console.log(checkout)
      commit('SET_CART', checkout)
    });
  }
}