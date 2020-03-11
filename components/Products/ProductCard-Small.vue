<template>
    <nuxt-link :to="`/product/${product.handle}`" class="product_card">
        <img :src="product.images[0].src" />
        <div class="right">
            <div class="title">{{product.title}}</div>
            <div class="price">${{productData[0].price}} x{{productData[0].quantity}}</div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: [
        'productData'
    ],
    computed:{
        products(){
            return this.$store.state.products;
        },
        product(){
            return this.products.find(el => el.id === this.productData[0].productId);
        }
    }
}
</script>