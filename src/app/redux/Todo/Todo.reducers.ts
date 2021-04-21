import { Todo } from "../../../domain/entities/Todo"
import {
    LIST_LOAD_REQUEST,
    LIST_LOAD_SUCCESS,
    LIST_LOAD_FAILURE,
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    MARK_COMPLETE,
    RefreshTodoListSuccess,
} from "./Todo.types"

const initialState = {
    loading: false,
    todo: [],
    todoId: {},
}

function todo(state = initialState, action: any) {
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
            console.log(action.payload)
            return {
                ...state,
                todo: action.payload,
                loading: false,
            }

        case ADD_TODO: {
            return {
                ...state,
                todo: action.payload,
            }
        }

        case REMOVE_TODO: {
            return {
                ...state,
                todo: action.payload,
            }
        }

        case EDIT_TODO: {
            return {
                ...state,
                todo: action.payload,
            }
        }

        case MARK_COMPLETE: {
            return {
                ...state,
                todo: action.payload,
            }
        }
        default:
            return state
    }
}

export default todo
