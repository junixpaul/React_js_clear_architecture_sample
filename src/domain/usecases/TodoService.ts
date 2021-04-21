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
        return this.todoRepo.RemoveTodo(todo)
    }

    async EditTodo(todo: any): Promise<Todo[]> {
        return this.todoRepo.EditTodo(todo)
    }

    async MarkCompleteTodo(todo: any): Promise<Todo[]> {
        const todos = { id: todo.id, todo: todo.todo, complete: todo.complete ? false : true }
        console.log("TTTTTTTTTTTTTTTTTTTTT")
        console.log("1st")
        console.log(todos)
        console.log("TTTTTTTTTTTTTTTTTTTTT")
        return this.todoRepo.MarkCompleteTodo(todos)
    }
}
