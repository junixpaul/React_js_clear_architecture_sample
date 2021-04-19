export const LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST"
export const LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS"
export const LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"

export type TodoProps = {
    todo: Todo[]
    refreshList: () => Todo[]
}

export type TodoActionType = RefreshTodoListSuccess

export interface RefreshTodoListSuccess {
    type: typeof LIST_LOAD_SUCCESS
    payload: Todo[]
}

export interface Todo {
    id: number
    todo: string
}
