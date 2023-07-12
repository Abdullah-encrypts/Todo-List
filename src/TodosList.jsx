import TodoItem from "./TodoItem";

const TodosList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && <h4> No Todo List! </h4>}
      {todos.map((todo) => {
        return (
          <TodoItem {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodosList;
