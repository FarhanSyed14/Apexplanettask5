// Validation Function
function validate(){
  let name = document.getElementById("name").value;
  
  if(name === ""){
    document.getElementById("msg").innerText = "Name Required";
  } else {
    document.getElementById("msg").innerText = "Valid";
  }
}

// API Fetch Function
async function fetchData(){
  try{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    if(!response.ok){
      throw new Error("API Error");
    }
    
    let data = await response.json();
    console.log(data);
    
    // Display first 5 posts
    let container = document.getElementById("data-container");
    container.innerHTML = "";
    data.slice(0, 5).forEach(post => {
      let postDiv = document.createElement("div");
      postDiv.className = "post";
      postDiv.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
      container.appendChild(postDiv);
    });
    
  } catch(error){
    console.log(error.message);
    document.getElementById("data-container").innerText = "Error fetching data";
  }
}

// Local Storage Functions
function setUserData(){
  let input = document.getElementById("storageInput").value;
  if(input.trim() !== ""){
    localStorage.setItem("user", input);
    document.getElementById("storage-msg").innerText = "Data saved successfully";
  }
}

function getUserData(){
  let user = localStorage.getItem("user");
  if(user){
    document.getElementById("storage-msg").innerText = `Retrieved: ${user}`;
  } else {
    document.getElementById("storage-msg").innerText = "No data found";
  }
}

function clearUserData(){
  localStorage.removeItem("user");
  document.getElementById("storage-msg").innerText = "Data cleared";
}