
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const elements = form.elements;

  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const formData = {
    email,
    password
  };

  console.log(formData);
  form.reset();
}