// Import user input as 'state'

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
  const [todoTitle, setTodoTitle] = React.useState<string>("Sample!!!");
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
        <input type="text" name="title" value={todoTitle} />
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