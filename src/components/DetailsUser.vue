<!-- User dashboard page -->
<template>
  <div class="container my-4">
      <div class="row">
          <div class="col-md-12 space">
            <a-alert v-if="success" message="Profile updated successfully" type="success" />
          </div>
      </div>
      <div class="row">
          <div class="col-md-2 my-3">
                <a-avatar :size="{ xs: 55, sm: 65, md: 75, lg: 85, xl: 100, xxl: 150 }">
                    <template #icon>
                        <UserOutlined  />
                    </template>
                </a-avatar>
          </div>
          <div class="col-md-10">
                <form @submit.prevent="updateInfo">
                    <div class="form-group">
                        <label for="inputFirstName">First Name</label>
                        <input type="text" class="form-control" id="inputFirstName" placeholder="Enter First Name" v-model="formState.firstName">
                    </div>
                    <div class="form-group">
                        <label for="inputLastName">Last Name</label>
                        <input type="text" class="form-control" id="inputLastName" placeholder="Enter Last Name" v-model="formState.lastName">
                    </div>
                    <div class="form-group">
                        <label for="inputBirth">Date of birth</label>
                        <input type="date" class="form-control" id="inputBirth" placeholder="Enter Date of birth" v-model="formState.birthDate">
                    </div>
                    <div class="form-group">
                        <label for="inputStreet">Street Address</label>
                        <textarea class="form-control" id="inputStreet" rows="3" v-model="formState.streetAddress"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputTown">Town/City</label>
                        <input type="text" class="form-control" id="inputTown" placeholder="Enter Town/City" v-model="formState.town">
                    </div>
                    <div class="form-group">
                        <label for="inputPostCode">Postcode</label>
                        <input type="text" class="form-control" id="inputPostCode" placeholder="Enter Postcode" v-model="formState.postCode">
                    </div>
                    <button type="submit" class="btn btn-danger" style="float: right;">{{loading ? 'Loading':'Update'}}</button>
                </form>
          </div>
      </div>
  </div>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';

export default{
    name:'DetailsUser',
    props:['info'],
    components:{
        UserOutlined
    },
    data(){
        return{
            formState:{},
            success: false,
            loading: false,
        }
    },
    methods:{
        updateInfo(){
            this.loading = true;
            this.$store.dispatch('updateInfo', this.formState).then(() => {
                this.success = true;
                this.loading = false;
                setTimeout(() => {
                    this.success = false;
                },1000)
            }).catch(() => {
                this.loading = false;
            })
        }
    },
    mounted(){
        this.formState = this.info
    }
}
</script>
<style scoped>
.space{
    margin: 15px 0px;
}
</style>