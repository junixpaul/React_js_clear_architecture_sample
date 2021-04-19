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
}
