function createResume(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let skills = document.getElementById("skills").value;

localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("phone",phone);
localStorage.setItem("skills",skills);

window.location="preview.html";

}
