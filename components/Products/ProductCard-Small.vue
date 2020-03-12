<template>
    <nuxt-link :to="`/product/${product.handle}`" class="product_card">
        <img :src="product.images[0].src" />
        <div class="right">
            <div class="title">
                {{product.title}}
                <span class="variant" v-if="productData[0].variantName">{{productData[0].variantName}}</span> 
            </div>
            <div class="price">${{productData[0].price}}</div>
            <div class="quantity">
                <input type="number" :value="productData[0].quantity" />
            </div>
            <button type="button" class="remove">Remove</button>
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
        },
        variant(){
            return this.products.find(el => el.variants.id === this.productData[0].variantId)
        }
    }
}
</script>