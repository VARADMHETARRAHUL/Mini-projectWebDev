window.onload = () => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      window.location.href = "login.html";
      return;
    }
    showPosts();
  };
  
  function addPost() {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const user = localStorage.getItem("currentUser");
  
    if (!title || !content) {
      alert("Fields can't be empty!");
      return;
    }
  
    const post = { title, content };
    let posts = JSON.parse(localStorage.getItem(`posts_${user}`)) || [];
    posts.unshift(post);
    localStorage.setItem(`posts_${user}`, JSON.stringify(posts));
  
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    showPosts();
  }
  
  function showPosts() {
    const user = localStorage.getItem("currentUser");
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";
  
    const posts = JSON.parse(localStorage.getItem(`posts_${user}`)) || [];
    posts.forEach((post, index) => {
      const postDiv = document.createElement("div");
      postDiv.className = "post";
  
      postDiv.innerHTML = `
        <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      `;
      postsDiv.appendChild(postDiv);
    });
  }
  
  function deletePost(index) {
    const user = localStorage.getItem("currentUser");
    let posts = JSON.parse(localStorage.getItem(`posts_${user}`)) || [];
    posts.splice(index, 1);
    localStorage.setItem(`posts_${user}`, JSON.stringify(posts));
    showPosts();
  }
  