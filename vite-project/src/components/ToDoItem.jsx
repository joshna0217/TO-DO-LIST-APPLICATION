import { useState } from 'react';

const ToDoItem = ({ todo, onDelete, onToggle, onEdit, onUpdate }) => {
  const [editText, setEditText] = useState(todo.text);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => onUpdate(todo.id, editText)}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => onToggle(todo.id)}>
            {todo.text}
          </span>
          <div className="actions">
            <button onClick={() => onEdit(todo.id)}>✏️</button>
            <button onClick={() => onDelete(todo.id)}>🗑️</button>
          </div>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
