// src/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "./api";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await loginApi(formData);

    // Fixed response handling
    if (result.message && result.user) {
      setMessage(`✅ ${result.message} Redirecting...`);
      // Store user data
      localStorage.setItem('user', JSON.stringify(result.user));
      
      // Redirect to dashboard
      setTimeout(() => navigate('/home'), 2000);
    } else if (result.error) {
      setMessage(`❌ ${result.error}`);
    } else if (result.non_field_errors) {
      setMessage(`❌ ${result.non_field_errors.join(', ')}`);
    } else {
      setMessage("❌ Login failed");
    }
    
    setLoading(false);
  };

  const goBack = () => {
    navigate('/');
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: "demo@levelio.com",
      password: "demopass123"
    });
  };

  return (
    <div className="login-container">
      <button onClick={goBack} className="back-button">← Back to Home</button>
      
      <div className="login-form">
        <h2>Login to levelio</h2>
        <p className="login-subtitle">Enter your credentials to access your account</p>
        
        {message && (
          <div className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange} 
              required 
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              value={formData.password}
              onChange={handleChange} 
              required 
              disabled={loading}
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="demo-section">
          <button 
            type="button" 
            className="demo-btn"
            onClick={fillDemoCredentials}
            disabled={loading}
          >
            🚀 Fill Demo Credentials
          </button>
        </div>

        <div className="auth-links">
          <p>Don't have an account? <a href="/register">Sign up</a></p>
        </div>
      </div>

      <style>{`
        .login-container {
          max-width: 450px;
          margin: 30px auto;
          padding: 20px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .back-button {
          background: none;
          border: none;
          color: #3b82f6;
          cursor: pointer;
          font-size: 1rem;
          margin-bottom: 2rem;
          padding: 0.5rem 0;
          align-self: flex-start;
        }

        .login-form {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }

        .login-form h2 {
          text-align: center;
          margin-bottom: 0.5rem;
          color: #1e293b;
          font-size: 1.8rem;
        }

        .login-subtitle {
          text-align: center;
          color: #64748b;
          margin-bottom: 2rem;
        }

        .input-group {
          margin-bottom: 1.5rem;
        }

        .input-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #374151;
          font-weight: 500;
        }

        .input-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .input-group input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .login-btn {
          width: 100%;
          padding: 0.875rem;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 1.5rem;
        }

        .login-btn:hover:not(:disabled) {
          background: #2563eb;
        }

        .demo-section {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .demo-btn {
          background: #10b981;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
        }

        .auth-links {
          text-align: center;
        }

        .auth-links a {
          color: #3b82f6;
          text-decoration: none;
        }

        .message {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .message.success {
          background: #d1fae5;
          color: #065f46;
        }

        .message.error {
          background: #fee2e2;
          color: #991b1b;
        }
      `}</style>
    </div>
  );
};

export default Login;