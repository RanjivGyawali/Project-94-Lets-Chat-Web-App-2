var firebaseConfig = {
    apiKey: "AIzaSyAclDo_yWcQBX48Ft9WzDGtZQrgBgO1Dko",
    authDomain: "chat-me-12d1a.firebaseapp.com",
    databaseURL: "https://kwitter-c3454-default-rtdb.firebaseio.com",
    projectId: "chat-me-12d1a",
    storageBucket: "chat-me-12d1a.appspot.com",
    messagingSenderId: "939143404120",
    appId: "1:939143404120:web:b402a1b1882edffaca882d"
  };
  
  // Initialize Firebase
fiebase.initializeApp(firebaseConfig);
function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("Username",user_name);

    window.location = "kwitter_room.html";
}