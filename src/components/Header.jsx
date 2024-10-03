
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-6 border-b-2 border-primary pb-2"
    >
      <h1 className="text-2xl sm:text-4xl font-semibold sm:font-bold text-primary">To-Do List</h1>
    </motion.header>
  );
};

export default Header;