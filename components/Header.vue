<template>
    <header class="site__header">
        <div class="site__header-logo">
          <nuxt-link to="/">
            <Logo />
          </nuxt-link>
        </div>
        <Navigation />
        <button type="button" @click="toggleCart()" class="toggle_cart">Cart</button>
        <Cart :toggle="toggle" />
    </header>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Cart from '~/components/Cart.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Navigation,
    Logo,
    Cart
  },
  computed: {
    toggle(){
      return this.$store.state.cartToggle
    }
  },
	methods: {
		toggleCart() {
			this.$store.commit('TOGGLE_CART')
		},
	}
}
</script>