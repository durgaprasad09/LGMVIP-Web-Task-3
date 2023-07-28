function displayFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const graduationYear = document.getElementById('graduationYear').value;

    const displayArea = document.getElementById('displayData');
    displayArea.innerHTML = `
      <h2>Entered Data:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Year of Graduation:</strong> ${graduationYear}</p>
    `;
  }
