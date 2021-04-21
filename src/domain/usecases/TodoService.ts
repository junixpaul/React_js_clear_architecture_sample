import { Todo } from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export class TodoServiceImpl {
    todoRepo: TodoRepository

    constructor(td: TodoRepository) {
        this.todoRepo = td
    }

    async GetTodo(): Promise<Todo[]> {
        return this.todoRepo.GetTodo()
    }

    async AddTodo(todo: any): Promise<Todo[]> {
        return this.todoRepo.AddTodo(todo)
    }

    async RemoveTodo(todo: any): Promise<Todo[]> {
        if (todo.complete == true) {
            throw alert("Unable to Delete. Todo Already Mark as Completed")
        }
        return this.todoRepo.RemoveTodo(todo)
    }

    async EditTodo(todo: any): Promise<Todo[]> {
        return this.todoRepo.EditTodo(todo)
    }

    async MarkCompleteTodo(todo: any): Promise<Todo[]> {
        const todos = { id: todo.id, todo: todo.todo, complete: todo.complete ? false : true }
        return this.todoRepo.MarkCompleteTodo(todos)
    }
}
