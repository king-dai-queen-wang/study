import React, {FC, ReactElement, useCallback, useEffect, useReducer, useState} from "react";
import TdList from "./list";
import TdInput from "./input/Input";
import {ACTION_TYPE, IState, ITodo} from "./models";
import {todoReducer} from "./reducer/reducer";


/*interface Iprop {
    todos: ITodo[]
    fetchUser: (param: any) => any;
    toggleTodo: (param: any) => any;
}

interface IState {
    todos: ITodo[]
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTodo: id => dispatch(addTodoAction(id)),
    fetchUser: (name) => dispatch(fetchUser(name))
});

const mapStateToProps = state => {
    return ({
        todos: state.todos
    });
};

// @ts-ignore
@connect(
    (state: IState): IState => ({todos: state.todos}),
    (dispatch: Dispatch) => {
        return ({
            toggleTodo: id => dispatch(addTodoAction(id)),
            fetchUser: (name) => dispatch(fetchUser(name))
        });
    }
)

export class Todo extends React.Component<Iprop>{
    render() {
        const { todos, toggleTodo, fetchUser } = this.props;
        return <button onClick={() => fetchUser('dww')}>
            Add Todos
            {(todos && todos.length) || 0}
        </button>;
    }
}
*/

const Todo: FC = (): ReactElement => {

    const initialState: IState = {
        todoList: []
    }

    // setState 的包装
    const [todoList, setToDoList] = useState<ITodo[]>([]);


    // useEffect Hook 看做
    // componentDidMount组件渲染执行函数、
    // componentDidUpdate组件更新执行的函数、
    // componentWillUnmount组件销毁执行时函数
    // 这三个函数的组合
    useEffect(() => {
        console.log(todoList);
    }, [todoList]);



    // 如哦父子传递function  则都用useCallBack 包装一下
    const addToDo = useCallback((todo: ITodo) => {
        setToDoList(todoList => [...todoList, todo]);
    }, []);

    const addToDoWithReducer = useCallback((todo: ITodo) => {
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        });
    }, []);

    const [state, dispatch] = useReducer(todoReducer, initialState)

    useEffect(() => {
        console.log(state.todoList);
    }, [state.todoList]);

    return (
        <div className="todo-list">
            <TdInput addToDo={addToDo} toDoList={todoList} addToDoDispatchWitchReducer={dispatch}/>
            <TdList/>
        </div>);
}

export default Todo;