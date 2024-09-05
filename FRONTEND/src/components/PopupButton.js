import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectionComponent = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/signup'); // Navigate to the signup page for users
  };

  const handleServiceProviderClick = () => {
    navigate('/register'); // Navigate to the register page for service providers
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Let me know!</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleUserClick}>
          User
        </button>
        <button style={styles.button} onClick={handleServiceProviderClick}>
          Service Provider
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default SelectionComponent;
