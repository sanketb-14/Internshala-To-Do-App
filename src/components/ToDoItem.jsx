import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrash, FaEdit, FaCheck, FaCheckCircle } from 'react-icons/fa';

const ToDoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center text-primary font-normal sm:font-semibold text-base sm:text-lg md:text-xl justify-between bg-white bg-opacity-50 p-2 sm:p-3 rounded-lg shadow">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
          className="input input-bordered w-full sm:w-auto flex-grow mr-0 sm:mr-2 mb-2 sm:mb-0 text-sm sm:text-base"
          autoFocus
        />
      ) : (
        <span
          onClick={() => toggleTodo(todo.id)}
          className={`flex-grow cursor-pointer mb-2 sm:mb-0 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
        >
          {todo.completed && <FaCheckCircle className="inline-block mr-2 text-green-500" />}
          {todo.text}
        </span>
      )}
      <div className="flex space-x-1 sm:space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsEditing(!isEditing)}
          className="btn btn-circle btn-xs sm:btn-sm btn-ghost"
        >
          <FaEdit className="text-xs sm:text-sm" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => deleteTodo(todo.id)}
          className="btn btn-circle btn-xs sm:btn-sm btn-ghost"
        >
          <FaTrash className="text-xs sm:text-sm" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleTodo(todo.id)}
          className={`btn btn-circle btn-xs sm:btn-sm ${todo.completed ? 'btn-success' : 'btn-ghost'}`}
        >
          <FaCheck className="text-xs sm:text-sm" />
        </motion.button>
      </div>
    </div>
  );
};

export default ToDoItem;