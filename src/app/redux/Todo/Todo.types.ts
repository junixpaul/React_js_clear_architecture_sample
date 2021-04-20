export const LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST"
export const LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS"
export const LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"
export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const EDIT_TODO = "EDIT_TODO"

export type TodoProps = {
    todo: Todo[]
    refreshList: () => Todo[]
    addTodo: () => Todo[]
}

export type TodoActionType = RefreshTodoListSuccess

export interface RefreshTodoListSuccess {
    type: typeof LIST_LOAD_SUCCESS
    payload: Todo[]
}

export interface addTodo {
    type: typeof ADD_TODO
    payload: {
        id: number
        todo: string
    }
}

export interface removeTodo {
    type: typeof REMOVE_TODO
    payload: {
        id: number
    }
}

export interface editTodo {
    type: typeof EDIT_TODO
    payload: {
        id: number
        todo: string
    }
}

export interface Todo {
    id: number
    todo: string
}
