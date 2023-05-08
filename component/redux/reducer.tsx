import { ADD__TO_CART } from "./constants";


// define default data
const initialState:any=[];
export const reducer=(state=initialState,action:any)=>{
    switch (action.type){
        //add item to card
        case ADD__TO_CART:
        return [
            ...state,
            action.data
        ]
        default:
            return state
    }
    
}