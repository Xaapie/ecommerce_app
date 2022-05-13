export default{
    ADD_ITEM(state, data){
        let itemSearch = state.cart.filter((item) => {
            return item.id == data.id && item.flavour == data.flavour
        })
        if(itemSearch.length != 0){
            itemSearch[0].qty = itemSearch[0].qty + data.qty
        }else{
            state.cart.push(data)
        }
    },
    REMOVE_ITEM(state, data){
        let cart = []
        state.cart.forEach(element => {
            if(element.id == data.id){
                if(element.flavour != data.flavour){
                    cart.push(element)
                }
            }else{
                cart.push(element)
            }
        })
        state.cart = cart
    },
    INCREMENT_QTY(state, data){
        let itemSearch = state.cart.filter((item) => {
            return item.id == data.id && item.flavour == data.flavour
        })
        ++itemSearch[0].qty
    },
    DECREMENT_QTY(state, data){
        let itemSearch = state.cart.filter((item) => {
            return item.id == data.id && item.flavour == data.flavour
        })
        --itemSearch[0].qty
        if(itemSearch.qty < 0){
            itemSearch[0].qty = 0
        }
    },
    CLEAR_CART(state){
        state.cart = []
    },

    CHANGE_PRICE(state, data){
        let itemSearch = state.cart.filter((item) => {
            return item.id == data.id && item.flavour == data.flavour
        })
        itemSearch[0].price = data.price
        itemSearch[0].price_id = data.price_id
    }

}