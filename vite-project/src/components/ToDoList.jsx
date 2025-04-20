import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onDelete, onToggle, onEdit, onUpdate }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
