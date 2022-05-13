import mutations from './mutations'
import { auth, db } from '../../../firebase/index'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, sendEmailVerification } from 'firebase/auth'
import { where, query, collection, getDocs, updateDoc, doc } from "firebase/firestore"
import router from '../../../router/index'
const state = () => ({
    user: null,
    userInfo: null,
})


const getters = {
    get_user(state){
        return state.user;
    },
    get_user_info(state){
        return state.userInfo;
    }
}

const actions = {
    async updateInfo({commit}, data){
        let resp = await updateDoc(doc(db, `users/${auth.currentUser.uid}`), data).then(async() => {
            const q = query(collection(db, 'users'), where('email', '==', auth.currentUser.email))
            const querySnap = await getDocs(q);
            querySnap.forEach((doc) => {
                commit('SET_USER_INFO', doc.data())
            });
        })

        return resp;
    },
    async getUserInfo({ commit }){
        const q = query(collection(db, 'users'), where('email', '==', auth.currentUser.email))
        const querySnap = await getDocs(q);
        querySnap.forEach((doc) => {
            commit('SET_USER_INFO', doc.data())
        });
        return querySnap  
    },
    async resetPassword(context, email){
        try{
            const response = await sendPasswordResetEmail(auth, email)

            return response
        }catch(e){

        }
    },
    async login({ commit }, data){ 
        try{
            const { email, password } = data 
            const response = await signInWithEmailAndPassword(auth, email, password).then(() => {
                commit('SET_USER', auth.currentUser);
            })
            return response;
        }catch(e){
            
        }
    },
    async logout({ commit }){
        const response = await signOut(auth)
        commit('CLEAR_USER')
        return response;
    },
    async sendEmail(){
        const response = await sendEmailVerification(auth.currentUser)

        return response
    },
    async register({ commit, dispatch }, data){
        try{
            const { email, password } = data 
            const response = await createUserWithEmailAndPassword(auth, email,password).then(() => {
                dispatch('sendEmail')
                //commit('SET_USER', auth.currentUser);
            })
            
            return response;

        }catch(e){

        }
    },
    fetchUser({ commit, dispatch }){
        auth.onAuthStateChanged(async user => {
            if(user === null){
                commit('CLEAR_USER')
            }else if (user && user.emailVerified){
                dispatch('getUserInfo')
                commit('SET_USER', user)
                if(router.isReady() && router.currentRoute.value.path == '/login'){
                    router.push('/')
                }
            }else{
                if(router.isReady()){
                    router.push('/login')
                }
            }
        })
    }
}

export default{
    namespaced: false,
    state,
    mutations,
    actions,
    getters,
}