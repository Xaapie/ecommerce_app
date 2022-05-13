<!-- Custmers Order List page -->
<template>
    <div class="container-fluid desktop_card">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <a-table :columns="columns" :data-source="data">
                    <template #headerCell="{ column }">
                    <template v-if="column.key === 'oname'">
                        <span>
                            Order Number
                        </span>
                    </template>
                    </template>

                    <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'oname'">
                        <span>
                            {{ record.numberOrder }}
                        </span>
                    </template>
                    <template v-else-if="column.key === 'status'">
                        <span v-if="record.status == 'Waiting for payment'">
                            <a-tag color="processing">
                                <template #icon>
                                    <sync-outlined :spin="true" />
                                </template>
                                {{ record.status }}
                            </a-tag>
                        </span>
                        <span v-else-if="record.status == 'Payment Successful'">
                            <a-tag color="success">
                                <template #icon>
                                    <check-circle-outlined />
                                </template>
                                {{ record.status }}
                            </a-tag>
                        </span>
                        <span v-else-if="record.status == 'Payment Failed'">
                            <a-tag color="error">
                                <template #icon>
                                    <close-circle-outlined />
                                </template>
                                {{ record.status }}
                            </a-tag>
                        </span>
                    </template>
                    <template v-else-if="column.key === 'shipping'">
                        <span>
                            <a-tag>
                                Street Address :{{ record.streetAddress }}
                            </a-tag>
                            <a-tag>
                                Town/City :{{ record.town }}
                            </a-tag>
                            <a-tag>
                                Postcode :{{ record.postCode }}
                            </a-tag>
                        </span>
                    </template>
                    <template v-else-if="column.key === 'order_date'">
                        <span>
                            {{ record.order_date }}
                        </span>
                    </template>
                    <template v-else-if="column.key === 'total_price'">
                        <span>
                            £{{ Math.round(record.total_price * 100) / 100 }}
                        </span>
                    </template>
                    <template v-else-if="column.key === 'details'">
                        <router-link :to="{name:'ShowDetailsOrder', params:{nbr:record.numberOrder}}">
                            <a-button type="primary" shape="round" :size="size">
                                <template #icon>
                                    <EyeFilled />
                                </template>
                                Show Details
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
import { ShoppingCartOutlined, CloseCircleOutlined } from '@ant-design/icons-vue';
import {
  CheckCircleOutlined,
  SyncOutlined,
  EyeFilled
} from '@ant-design/icons-vue';

export default {
    name:'OrderTable',
    props:['columns','data'],
    components: {
        ShoppingCartOutlined,
        SyncOutlined,
        CheckCircleOutlined,
        CloseCircleOutlined,
        EyeFilled
    },
};
</script>
<style scoped>

.desktop_card{
    display: block;
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

