import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class TodoDTO {
    id = 0
    todo = ""
}

export class TodoRepositoryImpl implements TodoRepository {
    jsonUrl = [
        { todo: "React Redux Clear Architecture", id: 0 },
        { todo: "Implementation", id: 1 },
    ]

    async GetTodo(): Promise<Todo[]> {
        return this.jsonUrl.map((todo: TodoDTO) => new Todo(todo.id, todo.todo))
    }

    async AddTodo(todo: any): Promise<Todo[]> {
        return this.jsonUrl.map((todo: TodoDTO) => new Todo(todo.id, todo.todo))
    }

    async RemoveTodo(): Promise<Todo[]> {
        return this.jsonUrl.map((todo: TodoDTO) => new Todo(todo.id, todo.todo))
    }

    async EditTodo(): Promise<Todo[]> {
        return this.jsonUrl.map((todo: TodoDTO) => new Todo(todo.id, todo.todo))
    }
}
