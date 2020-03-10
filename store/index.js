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
  setCheckoutID(state,checkoutID){
    state.checkoutID = checkoutID
  },
	addToCart(state, product) {
		// Manage duplicates
		const index = state.cartContents.findIndex(e => e.ID === product.ID)
		if(index === -1) {
			state.cartContents.push(product)
		} else {
			alert('Already in cart')
		}
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
  }
}