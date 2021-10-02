
//Estado inicial de la cesta
export const initialState={
    basket:[],
    user:null
};

//El reducer se encarga de saber si tiene que añadir o eliminar objetos de la cesta
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                //Añade al array basquet el tipo de accion ADD_TO_BASQUET y el objeto completo
                ...state,
                basket:[...state.basket,action.item],
            };
        
        case "REMOVE_FROM_BASKET":
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id=action.id
            );

            let newBasket=[...state.basket];

            if(index>=0){
                newBasket.splice(index,1);
            }
            else console.log("No se encuentra el producto en la cesta");
            
            return {
                ...state,
                basket:newBasket
            }

            case "SET_USER":
                return{
                    ...state,
                    user:action.user,
                }

            default:
                return state;
    }
};

export default reducer;