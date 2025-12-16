// JS sederhana (simulasi)

document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Login berhasil (simulasi)");
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Registrasi berhasil (simulasi)");
    });
  }

});
