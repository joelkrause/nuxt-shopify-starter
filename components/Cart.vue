<template>
	<div class="cart">
		{{cart}}
		<a :href="contents">Checkout</a>
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
		}
	},
}
</script>