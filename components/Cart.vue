<template>
	<a :href="contents">Checkout</a>
</template>

<script>
export default {
	computed: {
		contents() {
			return this.$store.state.checkoutURL
		}
	},
}
</script>