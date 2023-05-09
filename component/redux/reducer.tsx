import { ADD__TO_CART, REMOVE__From_CART } from "./constants";


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
        case REMOVE__From_CART:
            // result payo bhane hala otherwise khali
            let result = state.filter((item: { name: any; })=>{
                return item.name!=action.data
            })
            return[...result]
            
        default:
            return state
    }
    
}