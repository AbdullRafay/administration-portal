import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtcG38pKO8XbuUZeZoaGb6b2k-fgF35YY",
  authDomain: "administration-portal-18afa.firebaseapp.com",
  projectId: "administration-portal-18afa",
  storageBucket: "administration-portal-18afa.appspot.com",
  messagingSenderId: "1007163819628",
  appId: "1:1007163819628:web:82f39cb3a4e82b4c373a49",
  measurementId: "G-CHM00L0B2W",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cnic = document.getElementById("cnic");
var Usertype = document.getElementById("Usertype");

var user = {};

function btnclick() {
//   event.preventDefault();
  user.fname=fname.value;
user.lname=lname.value;
user.email=email.value;
user.password=password.value;
user.cnic=cnic.value;
user.Usertype=Usertype.value;

console.log(user);
  };
  console.log(user);// var Usertype=document.getElementById("Usertype").value;
// if(Usertype === student){
//     window.location.href"http://127.0.0.1:5500/index.html";
// }
