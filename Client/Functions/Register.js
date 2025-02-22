export async function handleRegister() {
    // Get values from the form fields
    const email = document.getElementById('mail').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value; // Assuming you want to send the name as well
    const gender = document.querySelector('input[name="gender"]:checked').value; // Get selected gender
  
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, gender }), // Send all required fields
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
  
      const data = await response.json();
      console.log('Registration successful:', data);
      
      // Redirect to the login page
      window.location.href = '/Client/Pages/loginpage.html'; // Update this URL based on your routing structure
  
    } catch (error) {
      alert(`${error}`);
      // Handle error (e.g., show error message to user)
    }
  }