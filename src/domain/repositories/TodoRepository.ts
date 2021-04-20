import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodo(): Promise<Todo[]>
    RemoveTodo(todo: any): Promise<Todo[]>
    AddTodo(todo: any): any
    EditTodo(todo: any): any
}
