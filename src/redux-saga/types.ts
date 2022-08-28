export type todoData = []

export interface addTodoData {
        id: number,
        title: string,
        completed: boolean
}


export interface updateTodoData {
        id: number,
        title: string,
        completed: boolean
    }


export interface deleteTodoData {
        id: number,
    }