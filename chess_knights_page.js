const firebaseConfig = {
    apiKey: "AIzaSyDKhL19XcE_-G1g8vap0wUlBE9eMFuoXeQ",
    authDomain: "chess-knights.firebaseapp.com",
    databaseURL: "https://chess-knights-default-rtdb.firebaseio.com",
    projectId: "chess-knights",
    storageBucket: "chess-knights.appspot.com",
    messagingSenderId: "508329143828",
    appId: "1:508329143828:web:b8cfd8d7381d897e644101"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }