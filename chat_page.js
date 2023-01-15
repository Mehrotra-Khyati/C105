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


user_name = localStorage.setItem("user_name" user_name); 
room_name = localStorage.setItem("room_name" room_name);   


function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      like:0,
      message:msg,
      name:user_name
  
    
    })
    document.getElementById("msg").value = ""
  }

  function getData(){
    firebase.database().ref("/" + room_name).on('value' ,
     function  (snapshot){document.getElementById("output").innerHTML = "" ; 
    snapshot.forEach (function (childSnapshot) {childKey = childSnapshot.val()
    "purpose"{
      firebase_message_id=childKey;
      message_data = childData;

      function updateLike(message_id){
        console.lo("clicked on like button -" + message_id)
        button_id = message_id
        likes = document.getElementById(button_id).value;
        update_likes = Number(likes) +1
        console.log(update_likes)

        firebase.database().ref(room_name).child(message_id).update({
          likes:update_likes
        })

        function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location.replace("index.html");

        }
       
      }


    }})})
    getData()
  }

  