export default{
    SET_USER(state,data){
        state.user = data;
    },
    SET_USER_INFO(state,data){
        state.userInfo = data;
    },
    CLEAR_USER(state){
        state.user = null;
        state.userInfo = null;
    }
}