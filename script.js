const form = document.getElementById("loginForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("errorMsg");

    if (username === "admin" && password === "1234") {
      localStorage.setItem("user", username);
      window.location.href = "home.html";
    } else {
      error.textContent = "Invalid username or password!";
    }
  });
}

const welcomeUser = document.getElementById("welcomeUser");
if (welcomeUser) {
  let user = localStorage.getItem("user");
  if (user) welcomeUser.textContent = "Logged in as: " + user;
}

const logoutBtn = document.getElementById("logoutBtn");
const logoutBtn2 = document.getElementById("logoutBtn2");

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

if (logoutBtn) logoutBtn.addEventListener("click", logout);
if (logoutBtn2) logoutBtn2.addEventListener("click", logout);


