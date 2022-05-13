<!-- Shopping cart table page-->
<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
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
                    <template v-else-if="column.key === 'flavour'">
                        <span>
                            {{ record.flavour }}
                        </span>
                    </template>
                    <template v-else-if="column.key === 'price'">
                        <span>
                            £{{ record.price }}
                        </span>
                    </template>
                    <template v-else-if="column.key === 'qty'">
                        <span>
                            {{ record.qty }}
                        </span>
                    </template>
                    <template v-else-if="column.key === 'total'">
                        <span>
                            £{{ (record.qty * record.price).toFixed(2) }}
                        </span>
                    </template>
                    <template v-else-if="column.key === 'action'">
                        <router-link :to="{name:'ProductDetails', params:{id:record.id}}">
                            <a-button type="primary" shape="round" :size="size">
                                <template #icon>
                                    <ShoppingCartOutlined />
                                </template>
                                Add To Cart
                            </a-button>
                        </router-link >
                    </template>
                    </template>
                </a-table>
            </div>
        </div>
    </div>
</template>
<script>
import { ShoppingCartOutlined } from '@ant-design/icons-vue';

export default {
    name:'ProductTable',
    props:['columns','data'],
    components: {
        ShoppingCartOutlined
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
</style>

