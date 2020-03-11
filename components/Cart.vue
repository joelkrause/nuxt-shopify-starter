<template>
	<div :class="`cart ${toggle ? 'visible' : ''}`">
		<div v-if="cart.length > 0">
			{{ cart.length > 1 ? 'items' : 'item' }}
			<ul>
			<ProductCardSmall v-for="product in cart" :productData="product" :key="product.index" />
			</ul>
		<a :href="checkout_url" class="button secondary">Checkout</a>
		</div>
		<div v-else>
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