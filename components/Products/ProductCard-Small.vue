<template>
    <div class="product_card">
        <!-- <img :src="product.images[0].src" /> -->
        {{productID}}
        {{qty}}
        {{price}}
    </div>
</template>

<script>
export default {
    props: [
        'productID',
        'variantID',
        'qty',
        'price'
    ],
    computed:{
        products(){
            return this.$store.state.products;
        },
        product(){
            return this.products.find(el => el.id === this.productID);
        }
    }
}
</script>