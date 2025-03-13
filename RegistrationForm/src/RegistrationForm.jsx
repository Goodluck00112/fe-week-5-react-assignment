import { useState } from "react";

const RegistrationForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State to manage validation errors
  const [errors, setErrors] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setErrors("All fields are required!");
      return;
    }

    // Clear errors and simulate form submission
    setErrors("");
    console.log("Form Submitted:", formData);
    alert("Registration successful!");

    // Clear form fields after submission
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
