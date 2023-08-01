import TodoItems from './todoItems';
import TodoForm from './todoForm';

const TodoContainer = () => {
  return (
    <div className="inline-block rounded-lg bg-[#15616D] p-4">
      <h1 className="text-2xl text-white mb-4">Things to-do</h1>
      <TodoForm />
      <TodoItems />
    </div>
  );
};

export default TodoContainer;