import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE, ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./Todo.types"
import { TodoServiceImpl } from "../../../domain/usecases/TodoService"
import { TodoRepositoryImpl } from "../../../data/repositories/TodoRepositoryImpl"

export const refreshList = async (dispatch: any) => {
    dispatch({ type: LIST_LOAD_REQUEST })

    try {
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todo = await todoService.GetTodo()
        dispatch({ type: LIST_LOAD_SUCCESS, payload: todo })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}
let generatedId = 0
export const addTodo = (todo: any) => ({
    type: ADD_TODO,
    payload: {
        id: ++generatedId,
        todo,
    },
})

export const removeTodo = (todo: any) => ({
    type: REMOVE_TODO,
    payload: todo,
})

export const editTodo = (todo: any) => ({
    type: EDIT_TODO,
    payload: todo,
})
