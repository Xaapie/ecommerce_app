<!-- Header -->
<template>
    <header>
        <div class="header-area">
            <div class="main-header header-sticky">
                <div class="container-fluid">
                    <div class="menu-wrapper">
                        <!-- Logo -->
                        <div class="logo">
                            <router-link to="/"><img class="logo" src="frontend/img/logo/logo.png" alt=""></router-link>
                        </div>
                        <!-- Main-menu -->
                        <div class="main-menu d-lg-block">
                            <nav>                                                
                                <ul id="navigation">  
                                    <li><router-link to="/">Home</router-link></li>
                                    <li><router-link to="/shop">Shop</router-link></li>
                                    <li><router-link to="/disposables">Disposables</router-link></li>
                                    <li class="hot">
                                        <router-link to="/wholesale">Wholesale</router-link>
                                    </li>
                                    <li><router-link to="/contact">Contact</router-link></li>
                                    
                                </ul>
                            </nav>
                        </div>
                        <!-- Header Right -->
                        <div class="header-right-custom">
                            <ul>
                                <li>
                                    <a-input-search
                                        v-model:value="search"
                                        placeholder="Search"
                                        @search="onSearch"
                                    />
                                </li>
                                <li v-if="!userInfo"><router-link to="/login"><span class="flaticon-user"></span></router-link></li>
                                <li v-else class="select__menu__user">
                                    <a-dropdown v-if="userInfo">
                                        <a class="ant-dropdown-link" @click.prevent>
                                        {{userInfo?.firstName}} {{userInfo?.lastName}} 
                                        <DownOutlined />
                                        </a>
                                        <template #overlay>
                                            <a-menu>
                                                <a-menu-item>
                                                    <router-link to="/dashboard">Dashboard</router-link>
                                                </a-menu-item>
                                                <a-menu-item>
                                                    <router-link to="/orders">My Orders</router-link>
                                                </a-menu-item>
                                                <a-menu-item>
                                                    <router-link to="/wish-list">Wish List</router-link> 
                                                </a-menu-item>
                                                <a-menu-item>
                                                    <a @click="logout">Logout</a>
                                                </a-menu-item>
                                            </a-menu>
                                        </template>
                                    </a-dropdown>
                                    <a-spin v-else size="small"/>
                                </li>
                                <li>
                                    <router-link to="/cart">
                                        <span class="flaticon-shopping-cart"></span>
                                        <span v-if="userInfo" class="count__cart">{{cart.length}}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Mobile Menu -->
                    <div class="col-12">
                        <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </header>
</template>
<script>
import { mapGetters } from 'vuex'
import { DownOutlined } from '@ant-design/icons-vue';
export default {
    name: 'Header',
    data(){
        return{
            search:''
        }
    },
    components:{
        DownOutlined,
    },
    methods:{
        logout(){
            this.$store.dispatch('logout').then(() => {
                localStorage.removeItem('lineItems')
                localStorage.removeItem('user_uid')
                localStorage.removeItem('status')
                this.$router.push('/')
            })
        },
        onSearch(){
            this.$router.push({name:'Shop', params:{id:this.search}})
        }
    },
    computed:{
        ...mapGetters({
            user: 'get_user',
            userInfo : 'get_user_info',
            cart: 'get_cart'
        }),
    },
    mounted(){
        console.log(this.user)
    }
}
</script>
<style scoped>

    .flaticon-shopping-cart{
        padding-right: 5px !important;
    }
    .count__cart{
        padding: 4px !important;
        margin: 0 !important;
        background: red !important;
        color: white !important;
        border-radius: 20% !important;
        font-size: 12px !important;
        vertical-align: text-top;
    }
    .logo{
        width: 100px;
        margin: 10px 0px;
    }
    .header-right ul{
        align-items: center;
    }
    .sticky-bar{
        position: unset;
    }
    .select__menu__user{
        margin-right: 5px;
    }
    .anticon-down{
        padding: 0 5px !important;
    }

    li{
        margin: 15px;
    }

    @media only screen and (max-width: 1147px) {
        li{
            margin: 5px;
        }
    }

    .header-right-custom ul{
        display: flex !important;
        justify-content: space-between;
        align-items: center;
    }
</style>