var firebaseConfig = {
      apiKey: "AIzaSyBoLAZV-u3OUvnZX89al3rVRUiewAy2BdE",
      authDomain: "chat-app-b8cd4.firebaseapp.com",
      databaseURL: "https://chat-app-b8cd4.firebaseio.com",
      projectId: "chat-app-b8cd4",
      storageBucket: "chat-app-b8cd4.appspot.com",
      messagingSenderId: "539518918684",
      appId: "1:539518918684:web:a49473ec15f1fd2866bfd9",
      measurementId: "G-7W2J5SRMM8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
document.getElementById("name").innerHTML = "Welcome " + localStorage.getItem("username") + "!";
function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose: "Adding user"});
      localStorage.setItem("Room Name", room_name);
      window.location = "page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='roomName' id='" + Room_names + "' onclick='redirect(this.id)'>" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirect(room_names){
      localStorage.setItem("Room Name", room_names);
      window.location = "page.html";
}
function logout(){
      localStorage.removeItem("Room Name");
      localStorage.removeItem("username");
      window.location = "index.html";
}