/* eslint-disable react/prop-types */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// eslint-disable-next-line react/prop-types
const TodoModal = ({ isOpen, onClose, task }) => {
  return (
    // Add your modal implementation here, you can use a modal library or custom CSS for this
    // For simplicity, let's use a simple overlay with some styles
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{task.attributes.todo_title}</h2>
          <ReactQuill className="text-gray-800" value={task.attributes.todo_desc} theme="bubble" readOnly />
          <div className="mt-4">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
            >
              Close
            </button>
            {/* Add other modal actions or buttons here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;