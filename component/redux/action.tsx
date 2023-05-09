import { ADD__TO_CART, REMOVE__From_CART } from "./constants";


// send to reducer
export function addtocard(item:any){
    return{
        type: ADD__TO_CART,
        data: item
    }
}
export function removefromcard(item:any){
    return{
        type: REMOVE__From_CART,
        data: item
    }
}