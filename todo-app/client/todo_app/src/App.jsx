/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import TodoContainer from './components/todoContainer';

function App() {
  const [isBackendAvailable, setIsBackendAvailable] = useState(true);

  // Function to check backend availability
  const checkBackendAvailability = async () => {
    try {
      await fetch('http://localhost:1337/api/todos');
    } catch (error) {
      setIsBackendAvailable(false);
    }
  };

  useEffect(() => {
    checkBackendAvailability();
  }, []);

  return (
    <div>
      {isBackendAvailable ? (
        <TodoContainer />
      ) : (
        <div>
          <h2 style={{ color: 'red' }}>
            Backend is currently unreachable.
          </h2>
          <TodoContainer />
        </div>
      )}
    </div>
  );
}

export default App;