import { User } from "../../../domain/entities/User"
import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE, RefreshUserListSuccess } from "./User.types"

const initialState = {
    loading: false,
    user: [],
}

function user(state = initialState, action: { type: string; payload: RefreshUserListSuccess }) {
    switch (action.type) {
        case LIST_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case LIST_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case LIST_LOAD_SUCCESS:
            console.log(typeof action.payload)
            return {
                ...state,
                user: action.payload,
                loading: false,
            }

        default:
            return state
    }
}
export default user
