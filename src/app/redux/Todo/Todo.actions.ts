import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE, ADD_TODO, REMOVE_TODO, EDIT_TODO, MARK_COMPLETE } from "./Todo.types"
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

export const AddTodo = (todos: any) => {
    return async (dispatch: any) => {
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todo = await todoService.AddTodo(todos)
        dispatch({ type: ADD_TODO, payload: todo })
    }
}

export const RemoveTodo = (todos: any) => {
    return async (dispatch: any) => {
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todo = await todoService.RemoveTodo(todos)
        dispatch({ type: REMOVE_TODO, payload: todo })
    }
}

export const EditTodo = (todos: any) => {
    return async (dispatch: any) => {
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todo = await todoService.EditTodo(todos)
        dispatch({ type: EDIT_TODO, payload: todo })
    }
}

export const MarkCompleteTodo = (todos: any) => {
    return async (dispatch: any) => {
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todo = await todoService.MarkCompleteTodo(todos)
        dispatch({ type: MARK_COMPLETE, payload: todo })
    }
}