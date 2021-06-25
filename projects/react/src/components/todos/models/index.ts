export interface ITodo {
    id: number;
    date: number;
    content: string;
    completed: boolean;
}

export interface IState{
    todoList: ITodo[];
}

export interface IAction {
    type: ACTION_TYPE,
    payload: ITodo | number
}

export enum ACTION_TYPE {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO
}