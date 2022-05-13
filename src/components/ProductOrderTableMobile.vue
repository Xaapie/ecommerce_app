<!-- Wish List page after adding a product -->
<template>
    <div class="container-fluid">
        <div class="row mobile_card my-2">
            <div v-for="(product, index) in data" :key="index" class="col-md-12 my-2">
                <div class="card">
                    <img class="card-img-top" :src="product.image" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <a-tag color="success">
                            <template #icon>
                                <check-circle-outlined />
                            </template>
                                £{{ product.price }}
                        </a-tag>
                        <div class="details__order">
                            <a-tag color="#027CC9">
                                <template #icon>
                                    <pushpin-outlined />
                                </template>
                                Quantity: {{ product.qty }}<br>
                            </a-tag>
                            <a-tag color="#027CC9">
                                <template #icon>
                                    <profile-outlined />
                                </template>
                                Total: <br>£{{ (product.qty * product.price).toFixed(2) }}
                            </a-tag>
                        </div>
                        <div class="show__details">
                            <router-link :to="{name:'ProductDetails', params:{id:product.id}}">
                                <a-button type="primary" shape="round" :size="size">
                                    <template #icon>
                                        <ShoppingCartOutlined />
                                    </template>
                                    Add To Cart
                                </a-button>
                            </router-link >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ShoppingCartOutlined } from '@ant-design/icons-vue';
import { DeleteOutlined } from '@ant-design/icons-vue';
export default {
    name:'ProductOrderTableMobile',
    props:['data'],
    components: {
        ShoppingCartOutlined,
        DeleteOutlined
    },
};
</script>
<style scoped>

.image__product{
    width: 115px;
    margin-right: 20px;
}
.ant-btn{
    display: flex;
    align-items: center;
}
.container-fluid{
    margin-top: 30px;
}


.mobile_card{
    display: none;
}

@media screen and (max-width:900px) {
    .mobile_card{
        display: block;
    }
}

.details__order{
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-transform: capitalize;
    margin: 10px 0px;
}

.views__card{
    display: flex;
    align-items: center;
}

.card-footer {
    display: flex;
    justify-content: space-between;
}

.show__details button{
    width: 100%;
    margin: 5px 0px;
}
</style>

