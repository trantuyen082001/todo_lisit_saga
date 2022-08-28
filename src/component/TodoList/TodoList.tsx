import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../redux-saga/actions";
import { IRootState } from "../../redux-saga/rootReducer";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  let todos = useSelector((state: IRootState) => state.todoList);
  useLayoutEffect(() => {
    dispatch(getTodo.request());
  }, []);

  return (
    <div className="todoList_Container">
      {todos.todoListData.map((todo: any, index) => {
        return <TodoItem key={index} todo={todo.title} id={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
