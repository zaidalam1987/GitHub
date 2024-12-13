import { useState } from 'react'; 
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', address:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`${name}: ${value}`);
  };

  return (
    <div className="container">
      <button onClick={() => alert('Button Clicked!')}>Click Me</button>

      <input
        type="text"
        name="name"
        placeholder="Type your name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      <div className="hover-message">
        <h3 onMouseOver={() => alert('Hello from Hello World!')}>Hello World!</h3>
      </div>
    </div>
  );
}

export default App;
