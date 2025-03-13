import { useState } from "react";

const RegistrationForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  const [errors, setErrors] = useState("");

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.name || !formData.email || !formData.password) {
      setErrors("All fields are required!");
      return;
    }

    
    setErrors("");
    console.log("Form Submitted:", formData);
    alert("Registration successful!");

    
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
