import React, {FC, ReactElement, useRef} from 'react';
import {ACTION_TYPE, IAction, ITodo} from "../models";


interface IProps {
    addToDo: (toDo: ITodo) => void;
    addToDoDispatchWitchReducer: (action: IAction) => void;
    toDoList: ITodo[];
}
const TdInput: FC<IProps> = ({ addToDo, toDoList, addToDoDispatchWitchReducer}): ReactElement => {

    const inputRef = useRef<HTMLInputElement>(null);

    const addToDoItemWithDispatch = () => {
        const val = inputRef.current!.value.trim();

        if (val.length > 0) {
            const  isExist: boolean = toDoList.some(item => item.content === val);
            if (isExist) {
                alert('已经有啦')
                return;
            }
            addToDoDispatchWitchReducer({
                type: ACTION_TYPE.ADD_TODO,
                payload: {
                    id: new Date().valueOf(),
                    date: new Date().getTime(),
                    content: val,
                    completed: false
                }
            })
        }
    }
    const addToDoItem = (): void => {
        const val = inputRef.current!.value.trim();

        if (val.length > 0) {
            const  isExist: boolean = toDoList.some(item => item.content === val);
            if (isExist) {
                alert('已经有啦')
                return;
            }
            addToDo({
                id: new Date().valueOf(),
                date: new Date().getTime(),
                content: val,
                completed: false
            })
        }
    }

    return (<div className="todo-input">
                <input className="todo-input" ref={inputRef}/>

                <button onClick={addToDoItem}>
                    Add Todos
                </button>

                <button onClick={addToDoItemWithDispatch}>
                    Add Todos With Reducer
                </button>

            </div>)
}
export default TdInput;