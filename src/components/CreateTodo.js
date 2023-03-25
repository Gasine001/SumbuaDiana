
// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateTodo = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [priority, setPriority] = useState('LOW');
//   const [status, setStatus] = useState('CREATED');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/todos', {
//         title,
//         description,
//         priority,
//         status,
//         //user: 39, // replace with the user id from the active session
//       });
//       console.log('Todo created:', response.data);
//       // handle success
//     } catch (error) {
//       console.error('Error creating todo:', error);
//       // handle error
//     }
//   };

//   return (

//     <div className="auth-wrapper">
//           <div className="auth-inner">
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Description:
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Priority:
//         <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//           <option value="LOW">Low</option>
//           <option value="MEDIUM">Medium</option>
//           <option value="HIGH">High</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Status:
//         <select value={status} onChange={(e) => setStatus(e.target.value)}>
//           <option value="CREATED">CREATED</option>
//           <option value="STARTED">STARTED</option>
//           <option value="COMPLETED">COMPLETED</option>
//           <option value="CANCELLED">CANCELLED</option>
//         </select>
//       </label>
//       <br />
//       <button type="submit">Create Todo</button>
//     </form>
//     </div>
//     </div>
//   );
// };

// export default CreateTodo;





import { useState } from 'react';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(0);
  const [priority, setPriority] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_id = sessionStorage.getItem('user_id'); // get user_id from active session
    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, status, priority, user_id }), // add user_id to body
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value={0}>Created</option>
          <option value={1}>Started</option>
          <option value={2}>Completed</option>
          <option value={3}>Cancelled</option>
        </select>
      </label>
      <br />
      <label>
        Priority:
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value={0}>Low</option>
          <option value={1}>Medium</option>
          <option value={2}>High</option>
        </select>
      </label>
      <br />
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default TodoForm;
