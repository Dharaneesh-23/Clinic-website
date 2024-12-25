document.getElementById('submit-btn').addEventListener('click', async () => {
    const data = {
      userName: document.getElementById('username').value,
      phoneNumber: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      gender: document.getElementById('gender').value,
      rating: document.querySelector('input[name="rating"]:checked')?.value || 0,
      review: document.getElementById('review').value,
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert('Feedback submitted successfully!');
      } else {
        alert('Failed to submit feedback.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  });
  