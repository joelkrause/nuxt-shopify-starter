<template>
	<div :class="`cart ${toggle ? 'visible' : ''}`">
		<div v-if="cart.length > 0">
			{{ cart.length > 1 ? 'items' : 'item' }}
			<ul>
				<li v-for="product in cart" :key="product.index">
					<ProductCardSmall :productID="product.productId" :variantID="product.variantId" :qty="product.quantity" :price="product.price" />
				</li>
			</ul>
		<a :href="checkout_url">Checkout</a>
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