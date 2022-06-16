function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location="index.html";
}


document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom(){room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}