import { ADD_LIKE } from '../constants';



export function changeLike(like) {
    // console.log(like, "what is this??")
    return {
        type: ADD_LIKE,
        payload: like
    }
}
