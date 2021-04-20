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

export const AddTodo = async (dispatch: any) => {
    console.log("XXXXXXXXXXXXX")
    console.log(dispatch)
    console.log("XXXXXXXXXXXXX")
    const todoRepo = new TodoRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    const todo = await todoService.AddTodo(dispatch)
}

export const RemoveTodo = async (dispatch: any) => {
    const todoRepo = new TodoRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    const todo = await todoService.RemoveTodo(dispatch)
    dispatch({ type: REMOVE_TODO, payload: todo })
}

export const EditTodo = async (dispatch: any) => {
    const todoRepo = new TodoRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    const todo = await todoService.EditTodo(dispatch)
    dispatch({ type: EDIT_TODO, payload: todo })
}
