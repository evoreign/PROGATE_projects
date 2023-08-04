/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditTodoModal from './editTodoModal';
import 'react-quill/dist/quill.snow.css'; 
import TodoModal from './todoModal';
import DOMPurify from 'dompurify';

const TodoItems = ({todos, setTodos}) => {
    
    //const [todos, setTodos] = useState([]);

    useEffect(() => {
    // const fetchTodos = async () => {

    //     try {
    //     const response = await fetch('http://localhost:1337/api/todos');
    //     const data = await response.json();

    //     const todosData = data.data;

    //     setTodos(todosData);
    //     } catch (error) {
    //     console.error('Error fetching todos:', error);
    //     }
    // };  
    }, []);
    const handleDelete = async (id) => {
    try {
        // Perform the DELETE request to the API using the todo id
        await fetch(`http://localhost:1337/api/todos/${id}`, {
        method: 'DELETE',
        });

        // After successful deletion, update the state to remove the deleted todo from the list
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
    };
    const handleCheckClick = async (id) => {
        try {
          // Get the current todo from the todos array using its ID
          const todoToUpdate = todos.find((todo) => todo.id === id);
      
          // Determine the new status based on the current status
          const newStatus = !todoToUpdate.attributes.todo_status;
      
          // Send a PUT or PATCH request to update the todo status
          await fetch(`http://localhost:1337/api/todos/${id}`, {
            method: 'PUT', // or 'PATCH' depending on your API
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: {
                todo_status: newStatus,
              },
            }),
          });
      
          // After successful update, update the state to reflect the new status
          setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? { ...todo, attributes: { ...todo.attributes, todo_status: newStatus } } : todo))
          );
        } catch (error) {
          console.error('Error updating todo status:', error);
        }
    };
      
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleEditClick = (todo) => {
    setSelectedTodo(todo);
    setModalOpen(true);
    };
    const [selectedTask, setSelectedTask] = useState(null);

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };
return (
    <div className="inline-block rounded-lg bg-[#15616D] p-4">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Deadline</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} onClick={() => handleTaskClick(todo)}>
              <td className="border px-4 py-2">{todo.attributes.todo_title}</td>
              {/* Truncate the description text if it exceeds a certain length */}
              <td
                className="border px-4 py-2"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    todo.attributes.todo_desc.length > 20
                      ? `${todo.attributes.todo_desc.slice(0, 20)}...`
                      : todo.attributes.todo_desc
                  ),
                }}
              />
              <td className="border px-4 py-2">{todo.attributes.todo_status ? 'Completed' : 'Incomplete'}</td>
              <td className="border px-4 py-2">
                {new Date(todo.attributes.todo_deadline).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </td>
              <td className="border px-4 py-2"
              onClick={(e) => {e.stopPropagation();}}>
              
                    <FontAwesomeIcon
                    icon={faCheck}
                    className={`mr-2 cursor-pointer ${todo.attributes.todo_status ? 'text-green-500' : 'text-gray-500'}`}
                    // onClick={(e) => handleCheckClick(e, todo.id)}
                    onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation here
                        // Add your logic to handle the "Check" action here
                        handleCheckClick(todo.id);
                    }}
                    />
                    <FontAwesomeIcon
                    icon={faEdit}
                    className="text-blue-500 mr-2 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation here
                        handleEditClick(todo);
                    }}
                    />
                    <FontAwesomeIcon
                    icon={faTrash}
                    className="text-red-500 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation here
                        handleDelete(todo.id);
                    }}
                    />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditTodoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        todo={selectedTodo}
      />
      {selectedTask && (
        <TodoModal
          isOpen={selectedTask !== null}
          onClose={() => setSelectedTask(null)}
          task={selectedTask}
        />
      )}
    </div>
  );
};

export default TodoItems;