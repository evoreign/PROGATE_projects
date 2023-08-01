import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// eslint-disable-next-line react/prop-types
const EditTodoModal = ({ isOpen, onClose, todo }) => {
  
  if (!isOpen) return null;

  
  const handleSaveChanges = async () => {
    try {
      // Send a PUT or PATCH request to update the todo status
      onClose();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-[#15616D] p-8 rounded-md max-w-10xl w-full">
        <h2 className="text-xl font-bold mb-4">Edit Todo</h2>
        <div className="mb-4">
          <label className="block font-bold">Title:</label>
          <input
            type="text"
            className="border rounded-md p-2 w-full"
            // eslint-disable-next-line react/prop-types
            value={todo.attributes.todo_title}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Description:</label>
          <ReactQuill
            // eslint-disable-next-line react/prop-types
            value={todo.attributes.todo_desc}
            theme="snow"
            className="border rounded-md p-2 w-full"
            style={{ minHeight: '200px' }}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Deadline Date:</label>
          <input
            type="date"
            className="border rounded-md p-2 w-full"
            // eslint-disable-next-line react/prop-types
            value={todo.attributes.todo_deadline}
          />
        </div>
        <button
          onClick={handleSaveChanges}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Save
        </button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 ml-2">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTodoModal;