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
        return this.jsonUrl.concat({ todo: todo.todo, id: todo.id })
    }

    async RemoveTodo(todo: any): Promise<Todo[]> {
        return this.jsonUrl.filter((i) => i.id !== todo.id)
    }

    async EditTodo(todo: any): Promise<Todo[]> {
        const index = this.jsonUrl.findIndex((todos) => todos.id === todo.id),
            tod = [...this.jsonUrl]
        tod[index] = todo
        console.log()
        return tod
    }
}
