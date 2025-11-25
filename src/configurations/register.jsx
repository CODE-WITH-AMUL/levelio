// src/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerApi } from "./api";

const Register = () => {
  const [formData, setFormData] = useState({ 
    username: "", 
    email: "", 
    password: "" 
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation - matching Django's min_length=8
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) {
      setMessage("Please fix the errors above");
      return;
    }

    setLoading(true);

    try {
      const result = await registerApi({
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      if (result.success || result.user) {
        setMessage("✅ Registration successful! Redirecting to login...");
        
        // Redirect to login after successful registration
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        // Handle Django error responses
        const errorMsg = result.error || result.message || "Registration failed";
        setMessage(`❌ ${errorMsg}`);
      }
    } catch (error) {
      setMessage("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fillDemoData = () => {
    setFormData({
      username: "demo_user",
      email: "demo@levelio.com",
      password: "demopass123"
    });
    setErrors({});
    setMessage("Demo data filled! You can now test the registration.");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h2>Create Your Account</h2>
          <p>Join Levelio and start checking answer sheets instantly</p>
        </div>

        {message && (
          <div className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <label htmlFor="username">Username *</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className={errors.username ? 'error' : ''}
              disabled={loading}
            />
            {errors.username && <span className="error-text">{errors.username}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              disabled={loading}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password (min. 8 characters)"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              disabled={loading}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
            <div className="password-requirements">
              Password must be at least 8 characters long
            </div>
          </div>

          <button 
            type="submit" 
            className="register-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

          

        <div className="auth-links">
          <p>
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .register-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .register-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 450px;
          border: 1px solid #e2e8f0;
        }

        .register-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .register-header h2 {
          color: #1e293b;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .register-header p {
          color: #64748b;
          font-size: 1rem;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .input-group label {
          margin-bottom: 0.5rem;
          color: #374151;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .input-group input {
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

        .input-group input.error {
          border-color: #ef4444;
        }

        .input-group input:disabled {
          background-color: #f9fafb;
          cursor: not-allowed;
        }

        .error-text {
          color: #ef4444;
          font-size: 0.8rem;
          margin-top: 0.25rem;
        }

        .password-requirements {
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 0.25rem;
        }

        .register-btn {
          padding: 0.875rem 1.5rem;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .register-btn:hover:not(:disabled) {
          background: #2563eb;
          transform: translateY(-1px);
        }

        .register-btn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .demo-section {
          text-align: center;
          margin: 1.5rem 0;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
        }

        .demo-btn {
          background: #10b981;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        .demo-btn:hover:not(:disabled) {
          background: #059669;
        }

        .demo-btn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .auth-links {
          text-align: center;
          margin: 1.5rem 0;
        }

        .auth-links a {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
        }

        .auth-links a:hover {
          text-decoration: underline;
        }

        .message {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 500;
        }

        .message.success {
          background: #d1fae5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .message.error {
          background: #fee2e2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 480px) {
          .register-card {
            padding: 2rem 1.5rem;
          }

          .register-header h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;