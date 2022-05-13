//contact actions
import mutations from './mutations'
import { db } from '../../../firebase'
import { collection, doc, addDoc } from 'firebase/firestore'

const state = ({

})


const getters = {

}


const actions = {
    async saveContact(context, data){

        let infos = {
            message : data.message,
            name : data.name,
            email : data.email,
            subject : data.subject,
        }
        
        const response = await addDoc(collection(db, 'contacts'),infos)

        return response
    }
}

export default{
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}