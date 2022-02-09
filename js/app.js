document.getElementById("submit-btn").addEventListener("click", function () {
  // user Email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  console.log(userEmail);
  // user Password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  console.log(userPassword);

  if (userEmail == "web@nazmul.com" && userPassword == "nazmul") {
    window.location.href = "banking.html";
  }
});
