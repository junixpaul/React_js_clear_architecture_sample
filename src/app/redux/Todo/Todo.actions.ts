import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./Todo.types"
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
