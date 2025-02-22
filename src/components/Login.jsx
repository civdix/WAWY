import React, { useState, navigate } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Username: "",
    password: "",
  });
  const [error, setError] = useState();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("In handleSubmit Lofin");

      const data = await response.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        console.log(data.token);
        navigate("/dashboard");
      } else {
        setError(data.error || "Something went wrong");
        console.log("ERROR: ", e);
      }
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }

  return (
    <div className="login-container">
      <div className="login-form glassy">
        <h2 className="titleSignUp mb-4">Join WAWY</h2>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone or Username"
            name="Username"
            value={formData.Username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn rainbow-border  w-100"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
