<!-- Wish List page after adding a product -->
<template>
    <div class="container-fluid">
        <div class="row justify-content-center desktop_card">
            <div class="col-md-10">
                <a-table :columns="columns" :data-source="data">
                    <template #headerCell="{ column }">
                    <template v-if="column.key === 'pname'">
                        <span>
                            Product
                        </span>
                    </template>
                    </template>

                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'pname'">
                            <img class="image__product" :src="record.image" :alt="record.name" />
                            <router-link :to="{name:'ProductDetails', params:{id:record.id}}">
                            {{ record.name }}
                            </router-link>
                        </template>
                        <template v-else-if="column.key === 'price'">
                            <span>
                                £{{ record.price }}
                            </span>
                        </template>
                        <template v-else-if="column.key === 'action'">
                            <router-link :to="{name:'ProductDetails', params:{id:record.id}}">
                                <a-button type="primary" shape="round" size="default">
                                    <template #icon>
                                        <ShoppingCartOutlined />
                                    </template>
                                    Add To Cart
                                </a-button>
                            </router-link >
                        </template>
                        <template v-else-if="column.key === 'actions'">
                            <a-button type="primary" danger @click="removeWish(record.id)"> 
                                <template #icon>
                                    <DeleteOutlined />
                                </template>
                                Delete
                            </a-button>
                        </template>
                    </template>
                </a-table>
            </div>
        </div>
    </div>
</template>
<script>
import { ShoppingCartOutlined } from '@ant-design/icons-vue';
import { DeleteOutlined } from '@ant-design/icons-vue';
export default {
    name:'ProductTable',
    props:['columns','data'],
    components: {
        ShoppingCartOutlined,
        DeleteOutlined
    },
    methods:{
        removeWish(id){
            let wishList = JSON.parse(localStorage.getItem('wishs'));
            wishList = wishList.filter((item) => item != id)
            localStorage.setItem('wishs', JSON.stringify(wishList))
            this.$emit('updateWish', id)
        },
    }
};
</script>
<style scoped>
.desktop_card{
    display: flex;
}

@media screen and (max-width:900px) {
    .desktop_card{
        display: none;
    }
}
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


</style>

