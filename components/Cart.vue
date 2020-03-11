<template>
	<div :class="`cart ${toggle ? 'visible' : ''}`">
		<div class="cart-inner" v-if="cart.length > 0">
			<header>
			Your Cart
			{{ cart.length > 1 ? `${cart.length} items` : `${cart.length} item` }}
			</header>
			<ProductCardSmall v-for="product in cart" :productData="product" :key="product.index" />
		<a :href="checkout_url" class="button secondary">Checkout</a>
		</div>
		<div class="cart-inner" v-else>
			Empty
		</div>
	</div>
</template>

<script>
import ProductCardSmall from '~/components/Products/ProductCard-Small.vue'
export default {
	components:{
		ProductCardSmall
	},
	props: [
		'toggle'
	],
	computed: {
		cart() {
			return this.$store.state.cart
		},
		checkout_url() {
			return this.$store.state.checkoutURL
		}
	}
}
</script>