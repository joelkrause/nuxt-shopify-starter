<template>
    <header class="site__header">
        <div class="site__header-logo">
          <nuxt-link to="/">
            <Logo />
          </nuxt-link>
        </div>
        <Navigation />
        <Cart />
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
  }
}
</script>