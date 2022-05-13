<template>
    <div class="row mobile_card my-2">
        <div v-for="(order, index) in data" :key="index" class="col-md-12 my-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Order Number {{order.numberOrder}}</h5>
                    <span v-if="order.status == 'Payment Successful'">
                        <a-tag color="success">
                            <template #icon>
                                <check-circle-outlined />
                            </template>
                            {{ order.status }}
                        </a-tag>
                    </span>
                    <span v-else-if="order.status == 'Payment Failed'">
                        <a-tag color="error">
                            <template #icon>
                                <close-circle-outlined />
                            </template>
                            {{ order.status }}
                        </a-tag>
                    </span>
                    <div class="details__order">
                        <a-tag color="#027CC9">
                            <template #icon>
                                <pushpin-outlined />
                            </template>
                            Address: {{ order.streetAddress }}<br>
                            Town/City: {{ order.town }}<br>
                            Postcode: {{ order.postCode }}
                        </a-tag>
                        <a-tag color="#027CC9">
                            <template #icon>
                                <profile-outlined />
                            </template>
                            Order Date: <br>{{ order.order_date }}
                        </a-tag>
                    </div>
                    <div class="show__details">
                        <router-link :to="{name:'ShowDetailsOrder', params:{nbr:order.numberOrder}}">
                            <a-button type="primary">Show Details</a-button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'OrderTableMobile',
    props:['data']
}
</script>
<style scoped>

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