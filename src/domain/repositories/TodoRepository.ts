import { Todo } from "../entities/Todo"

export interface TodoRepository {
    GetTodo(): Promise<Todo[]>
    RemoveTodo(todo: any): any
    AddTodo(todo: any): any
    EditTodo(todo: any): any
    MarkCompleteTodo(todo: any): any
}
