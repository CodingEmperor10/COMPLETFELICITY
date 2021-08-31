// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCECETh42Kf4FFieL_cZ23El_XU3L4gOc4",
  authDomain: "ourfelicity-e2426.firebaseapp.com",
  databaseURL: "https://ourfelicity-e2426-default-rtdb.firebaseio.com",
  projectId: "ourfelicity-e2426",
  storageBucket: "ourfelicity-e2426.appspot.com",
  messagingSenderId: "334952888047",
  appId: "1:334952888047:web:2c17920e50fb39edcecd1a"
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
