import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaClipboardList } from 'react-icons/fa';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [newTodo, setNewTodo] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); 
      return;
    }
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="min-h-screen mx-auto p-2 sm:p-4 md:p-6 w-full flex flex-col justify-start items-center">
      <div className="bg-white bg-opacity-20 flex flex-col items-center backdrop-blur-lg rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-lg p-3 sm:p-4 md:p-6 mt-8">
        <Header />
        <form onSubmit={addTodo} className="flex mb-4 justify-center w-full">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="input input-sm sm:input-md text-base sm:text-lg md:text-xl text-secondary input-bordered flex-grow mr-2"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-sm sm:btn-md"
          >
            <FaPlus />
          </motion.button>
        </form>
        {showAlert && (
          <div className="alert alert-warning mb-4">
            <span>Please add a Task!</span>
          </div>
        )}
        <AnimatePresence>
          {todos.length > 0 ? (
            <ToDoList
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ) : (
            <div className="flex flex-col items-center">
              <FaClipboardList className="text-4xl sm:text-5xl md:text-6xl text-primary mb-2 sm:mb-3 md:mb-4" />
              <p className="text-base sm:text-lg md:text-xl text-primary">No todos yet. Add one!</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;