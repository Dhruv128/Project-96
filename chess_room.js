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
  
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome To Chess Knights"+user_name;

function addRoom(){
  room_name=document.getElementById("room_name").value;
  localStorage.setItem("room_name",room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding room name"
  });
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location.replace("kwitter_page.html");
}