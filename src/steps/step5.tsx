// 入力を扱うのがめんどくさいから limitAt を消します

import React from "react";

type Todo = {
  title: string;
  completed: boolean
};


const TodoListItem: React.VFC<{todo: Todo}> = (props) => {
  return (<li>
    {props.todo.title}
    {props.todo.completed}
  </li>);
}


export const App: React.VFC = () => {
  const todoList: Todo[] = [
    {
      title: "Sample1",
      completed: false
    },
    {
      title: "Sample2",
      completed: false
    }
  ];
  return (
    <div>
      <form>
        <input type="text" name="title" />
        <button>Add todo</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.title} todo={todo}></TodoListItem>
        ))}
      </ul>
    </div>
  );
};