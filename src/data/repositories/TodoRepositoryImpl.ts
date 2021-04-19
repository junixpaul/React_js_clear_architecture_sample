import { Todo } from "../../domain/entities/Todo"
import { TodoRepository } from "../../domain/repositories/TodoRepository"

class TodoDTO {
    id = 0
    todo = ""
}

export class TodoRepositoryImpl implements TodoRepository {
    jsonUrl = [
        { todo: "React Redux Clear Architecture", id: 1 },
        { todo: "Implementation", id: 2 },
    ]

    async GetTodo(): Promise<Todo[]> {
        return this.jsonUrl.map((todo: TodoDTO) => new Todo(todo.id, todo.todo))
    }
}
