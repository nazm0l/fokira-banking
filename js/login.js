document.getElementById("submit-btn").addEventListener("click", function () {
  // user Email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  // user Password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  if (userEmail == "web@nazmul.com" && userPassword == "nazmul") {
    window.location.href = "banking.html";
  } else {
    alert("please enter valid info");
  }
});
