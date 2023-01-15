// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBiwLGX9ixQp73KIRAscqYZ53SWw2in9kk",
    authDomain: "lets-chat-ddb89.firebaseapp.com",
    databaseURL: "https://lets-chat-ddb89-default-rtdb.firebaseio.com",
    projectId: "lets-chat-ddb89",
    storageBucket: "lets-chat-ddb89.appspot.com",
    messagingSenderId: "492865007160",
    appId: "1:492865007160:web:0d2b3b06f059603b17c0cd",
    measurementId: "G-EWXEFEXPE7"
  };
  
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
document.getElementById("user_name").innerHTML = "Welcome" + user_name

function addRoom(){
    room_name = document.getElementById("room_name").value ;

firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
})


function redirectToRoomName(name){
   
    localStorage.setItem("room_name" ,room_name );
    window.location="chat_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name - " + Room_names);
   row ="<div class 'room_name' id="+Room_names+"onclick='redirectToRoomName(tis.id)'>#" +  Room_names +"</div"
document.getElementById("output").innerHTML += row;

   });});}
getData();