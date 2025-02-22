export async function handleLogin() {
    // Get values from the login form fields
    const email = document.getElementById('mail').value; // Assuming you have a login form with this ID
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
  
      const data = await response.json();
      console.log('Login successful:', data);
      localStorage.setItem('token', data.token); // Store token
      // Redirect or update UI on successful login
      window.location.href = '/'; // Redirect to a protected route or dashboard
  
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show error message to user)
    }
  }
