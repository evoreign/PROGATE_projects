/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS for the default theme

const TodoForm = ({ onSubmit, refetch }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data in the desired JSON format
    const formData = {
      data: {
        todo_title: title,
        todo_desc: desc,
        todo_status: false,
        todo_deadline: `${deadline}T00:00:00.000Z`,
      },
    }; 

    try {
      // Send a POST request to the API with the form data
      const response = await fetch('http://localhost:1337/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      // Clear the form fields after successful submission
      setTitle('');
      setDesc('');
      setDeadline('');
      refetch();
      // Call the onSubmit prop to notify the parent component about the new todo
      onSubmit(formData.data);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Custom styles for the description editor wrapper
  const editorWrapperStyles = {
    backgroundColor: '#646cffaa', // Set the background color to gray (#f3f4f6)
    border: '1px solid #646cffaa', // Set a border around the editor
    borderRadius: '4px', // Add a border radius for a rounded appearance
    // padding: '8px', // Add some padding to the editor
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex mb-2 text-white">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border rounded-md p-2 mr-2 focus:outline-none focus:border-blue-500 flex-1  bg-[#646cff] text-white"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border rounded-md p-2 focus:outline-none focus:border-blue-500 bg-[#646cff]"
          
        />
      </div>
      {/* Wrap the ReactQuill component in a div with the custom styles */}
      <div style={editorWrapperStyles}>
        <ReactQuill
          value={desc}
          onChange={setDesc}
          placeholder="Description"
          theme="snow" // Use "snow" for the default theme
          className="bg-[#646cff] text-white"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;