<template>
	<div class="cart">
		<div v-if="cart.length > 1">
			{{ cart.length > 1 ? 'items' : 'item' }}
			<ul>
				<li v-for="product in cart" :key="product.index">
					{{product}}
				</li>
			</ul>
		<a :href="contents">Checkout</a>
		</div>
		<div v-else>
			Empty
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		cart() {
			return this.$store.state.cartContents
		},
		contents() {
			return this.$store.state.checkoutURL
		},
		shopifyCart(){
			this.$shopify.checkout.fetch(this.$store.state.checkoutID).then(checkout => {
				return checkout
			});
		}
	}
}
</script>