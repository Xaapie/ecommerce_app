<!-- My Order list page-->
<template>
    <Layout>
        <TitlePage title="Orders List"/>
        <OrderTable :columns="columns" :data="dataRefresh"/>
        <OrderTableMobile :data="dataRefresh"/>
    </Layout>
</template>
<script>
import TitlePage from '@/components/TitlePage'
import Layout from '@/views/layouts/Layout'
import OrderTable from '@/components/OrderTable'
import OrderTableMobile from '@/components/OrderTableMobile'
import { mapGetters } from 'vuex'
const columns = [
  {
    title: 'Order Number',
    dataIndex: 'oname',
    key: 'oname',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Shipping Address',
    dataIndex: 'shipping',
    key: 'shipping',
  },
  {
    title: 'Order Date',
    dataIndex: 'order_date',
    key: 'order_date',
  },
  {
    title: 'Total',
    dataIndex: 'total_price',
    key: 'total_price',
  },
  {
    title: 'Details',
    key: 'details',
  },
];

export default {
    name:'Orders',
    components:{
        Layout,
        OrderTable,
        TitlePage,
        OrderTableMobile
    },
    data(){
        return{
            data:[],
            columns
        }
    },
    computed:{
        ...mapGetters({
            orders: 'get_orders'
        }),

        dataRefresh(){
          return this.orders;
        }
    },  
    created(){
      this.$store.dispatch('getOrders')
    }

}
</script>
<style >
    
</style>