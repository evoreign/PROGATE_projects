/* eslint-disable no-unused-vars */
import TodoItems from './todoItems';
import TodoForm from './todoForm';
import React, { useEffect, useState } from 'react';
const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {

    try {
      const response = await fetch('http://localhost:1337/api/todos');
      const data = await response.json();
  
      const todosData = data.data;
  
      setTodos(todosData);
      } catch (error) {
      console.error('Error fetching todos:', error);
      }
    };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="inline-block rounded-lg bg-[#15616D] p-4">
      <h1 className="text-2xl text-white mb-4">Things to-do</h1>
      <TodoForm refetch={fetchTodos}/>
      <TodoItems todos={todos}setTodos={setTodos}/>
      
    </div>
  );
};

export default TodoContainer;