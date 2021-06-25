import {ACTION_TYPE, IAction, IState, ITodo} from "../models";

function todoReducer (state: IState, action: IAction): IState {
    switch (action.type) {
        case ACTION_TYPE.ADD_TODO: {
            return {
                ...state,
                todoList: [...state.todoList, action.payload as ITodo]
            };
        }
        case ACTION_TYPE.REMOVE_TODO: {
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.payload as number)
            };
        }
        case ACTION_TYPE.TOGGLE_TODO:{
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if (item.id === action.payload as number) {
                        return {
                            ...item, completed: !item.completed
                        }
                    } else {
                        return {...item}
                    }
                })
            };
        }
        default: {
            return state;
        }
    }
}

export {
    todoReducer
}