export class Todo {
    id: number
    todo: string
    complete: boolean

    constructor(id: number, todo: string, complete: boolean) {
        this.id = id
        this.todo = todo
        this.complete = complete
    }
}
