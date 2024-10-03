
import { motion, AnimatePresence } from 'framer-motion';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <ul className="space-y-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl bg-white bg-gradient-to-br from-purple-400 to-blue-300 backdrop-blur-lg rounded-lg shadow-lg p-2 sm:p-4 md:p-6">
      <AnimatePresence>
        {todos.map(todo => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ToDoItem
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default ToDoList;