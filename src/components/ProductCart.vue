<!-- Product cart page-->
<template>
    <td>
        <div class="media">
        <div class="d-flex">
            <img :src="product.image" />
        </div>
        <div class="media-body">
            <p>{{product.name}}</p>
        </div>
        </div>
    </td>
    <td>
        <h5>{{product.flavour ? product.flavour : 'Base'}}</h5>
    </td>
    <td>
        <h5>£{{getFinalPrice}}</h5>
    </td>
    
    <td>
        <div class="product_count">
        <span class="input-number-decrement" @click="decrement"> <i class="ti-minus"></i></span>
            <input class="input-number" type="text" v-model="qty_final" min="0" max="10">
        <span class="input-number-increment" @click="increment"> <i class="ti-plus"></i></span>
        </div>
    </td>
    <td>
        <h5>£{{ (qty_final * product.price).toFixed(2) }}</h5>
    </td>
    <td> 
        <a-button type="primary" size="default" danger @click="deleteItem">
            <template #icon>
                <delete-outlined />
            </template>
        </a-button>
    </td>
</template>
<script>
import { DeleteOutlined } from '@ant-design/icons-vue';
export default {
    name: 'ProductCart',
    props: ['product'],
    emits: ['updateLine'],
    components:{
        DeleteOutlined,
    },
    data(){
        return{
            qty_final: this.product.qty,
            discounts: []
        }
    },
    computed:{
        getFinalPrice(){
            let finalPrice = this.product.price
            let priceID = ''
            this.discounts.forEach(element => {
                if(element.max){
                    if(this.qty_final >= element.min && this.qty_final <= element.max){
                        finalPrice = element.discount
                        priceID = element.price_id
                        
                    }
                }else{
                    if(this.qty_final >= element.min){
                        finalPrice = element.discount
                        priceID = element.price_id
                    }
                }
            });

            if(this.product){
                let data = {
                    id: this.product.id,
                    flavour: this.product.flavour,
                    price: finalPrice,
                    price_id: priceID
                }
    
                let old_price_id = this.product.price_id
    
                this.$store.dispatch('changePrice', data).then(() => {
                    let item = {
                        old_price_id: old_price_id,
                        price_id: priceID,
                        quantity: this.qty_final
                    }
                    this.$emit('updateLine', item)
                })
            }


            return finalPrice
        }
    },
    methods:{
        increment(){
            ++this.qty_final
            let data ={
                id: this.product.id,
                flavour: this.product.flavour,
            }
            this.$store.dispatch('incrementQty', data).then(() => {
                let item = {
                    old_price_id: this.product.price_id,
                    price_id: this.product.price_id,
                    quantity: this.qty_final
                }
                this.$emit('updateLine', item)
            })
        },
        decrement(){
            --this.qty_final;
            if(this.qty_final < 0){
                this.qty_final = 0
            }
            let data ={
                id: this.product.id,
                flavour: this.product.flavour,
            }
            this.$store.dispatch('decrementQty', data).then(() => {
                let item = {
                    old_price_id: this.product.price_id,
                    price_id: this.product.price_id,
                    quantity: this.qty_final
                }
                this.$emit('updateLine', item)
            })
            
        },
        deleteItem(){
            let data = {
                id: this.product.id,
                flavour: this.product.flavour
            }
            this.$store.dispatch('removeItem', data)
        }
    },
    mounted(){
        this.$store.dispatch('getMultiPaymentDiscount', this.product.id).then((resp) => {
            this.discounts = resp
        })
    }
}
</script>
<style scoped>
    .input-number-increment{
        padding-bottom: 4px;
    }
    .input-number-decrement{
        padding-top: 5px;
    }
    
</style>