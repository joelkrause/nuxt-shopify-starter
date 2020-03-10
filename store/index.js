export const state = () => ({
  products: [],
  collections: [],
  cartContents: [],
  checkoutID: ''
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
  async setCheckoutID({commit}) {
    const checkout_id = await this.$shopify.checkout.create().then(checkout => {
      commit('SET_CHECKOUT_ID', checkout.id)
    });
  }
}