<template>
    <button id="cartToggle">Cart{{contents}}</button>
</template>

<script>
export default {
	computed: {
		contents() {
			return this.$store.state.cartContents
		}
	},
}
</script>