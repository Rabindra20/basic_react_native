import { ADD__TO_CART } from "./constants";

// send to reducer
export function addtocard(item:any){
    return{
        type: ADD__TO_CART,
        data: item
    }
}