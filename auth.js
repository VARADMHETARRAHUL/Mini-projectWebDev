function signup() {
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();
  
    if (!username || !password) {
      alert("Fields can't be empty!");
      return;
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username]) {
      alert("Username already exists!");
      return;
    }
  
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    window.location.href = "login.html";
  }
  
  function login() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
  
    let users = JSON.parse(localStorage.getItem("users")) || {};
  
    if (users[username] === password) {
      localStorage.setItem("currentUser", username);
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password.");
    }
  }
  
  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  }
  