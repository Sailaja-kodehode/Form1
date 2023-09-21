const loginForm = document.getElementById("login-form");
//here we  are setting event listner to listening submit button
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //form data now setup an object
  const loginFormData = new FormData(loginForm);
  const name = loginFormData.get("astronautName");
  const email = loginFormData.get("astronautEmail");
  const password = loginFormData.get("astronautPassword");
  console.log(name, email, password);
});
