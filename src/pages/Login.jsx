import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // tunaretrieve from localstorage
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    // Validaaatiion
    if (registeredUser && (formData.emailOrUsername === registeredUser.email) && (formData.password === registeredUser.password)) {
      alert('Login successful!');
      // Redirection
      navigate('/landingPage');
    } else {
      alert('Invalid credentials');
    }
  };
  return (
    <div className="background" style={{
      // backgroundImage: "url(../assets/software.jpeg)",
      // backgroundRepeat: 'no-repeat',
      // height: '100vh',
      // width: '100vh',
      // border: '2px solid red'
  

    }}>

    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
      <label style={{ display: 'block', marginBottom: '10px' }}>Email or Username:</label>
      <input
        type="text"
        name="emailOrUsername"
        value={formData.emailOrUsername}
        onChange={(e) => setFormData({ ...formData, emailOrUsername: e.target.value })}
        placeholder="Email or Username"
        required
        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      <label style={{ display: 'block', marginBottom: '10px' }}>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value
        })}
        placeholder="Password"
        required
        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', 
      padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer'
    }}>Login</button>
    </form>
    </div>
  );
}

export default LoginForm;