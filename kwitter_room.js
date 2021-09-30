
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf5uHz5svrQjLu9FT9Ch16JFLUfr38Oag",
  authDomain: "einstienbot-bypi.firebaseapp.com",
  databaseURL: "https://einstienbot-bypi-default-rtdb.firebaseio.com",
  projectId: "einstienbot-bypi",
  storageBucket: "einstienbot-bypi.appspot.com",
  messagingSenderId: "524200906982",
  appId: "1:524200906982:web:2c36c959ad6bd664a82b27"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
