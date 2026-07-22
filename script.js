// Welcome Button
function welcome() {
    alert("Welcome to Smart College Management Portal");
}
// Ask Student Name
let studentName = prompt("Enter Your Name");
if (studentName != null && studentName != "") {
    alert("Hello " + studentName + ", Welcome!");
}
// Current Date & Time
let today = new Date();
console.log(today);
// Logout Function
function logout() {
    let choice = confirm("Do you really want to Logout?");
    if (choice) {
        alert("Logout Successfully");
        window.location = "login.html";
    }
    else {
        alert("Logout Cancelled");
    }
}
// Change Heading Color
function changeColor() {
    let heading = document.querySelector(".hero h1");
    if (heading != null) {
        heading.style.color = "yellow";
    }
}
// Change Background Color
function changeBackground() {
    document.body.style.background = "#d6f5ff";
}
// Student Counter
let students = 500;
students++;
console.log("Total Students : " + students);
// Percentage Calculator
function percentage() {
    let marks = prompt("Enter Your Marks Out of 500");
    if (marks == null || marks == "") {
        return;
    }
    let per = (marks / 500) * 100;
    alert("Your Percentage is : " + per.toFixed(2) + "%");
}
// Greeting Message
let hour = new Date().getHours();
if (hour < 12) {
    console.log("Good Morning");
}
else if (hour < 17) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}
// Live Clock
function showTime() {
    let clock = document.getElementById("clock");
    if (clock != null) {
        let time = new Date();
        clock.innerHTML = time.toLocaleTimeString();
    }
}
setInterval(showTime, 1000);
// Attendance Calculator
function attendance() {
    let present = parseInt(document.getElementById("present").value);
    let total = parseInt(document.getElementById("total").value);
    if (isNaN(present) || isNaN(total) || total <= 0) {
        alert("Please Enter Valid Values");
        return;
    }
    let per = (present / total) * 100;
    document.getElementById("result").innerHTML =
        "Attendance : " + per.toFixed(2) + "%";
    let bar = document.getElementById("bar");
    if (bar != null) {
        bar.style.width = per + "%";
        bar.innerHTML = per.toFixed(0) + "%";
    }
}
// Search Student
function searchStudent() {
    let name = document.getElementById("search").value.toLowerCase();
    let students = ["anu sharma", "riya", "rahul", "neha"];
    let msg = document.getElementById("msg");
    if (students.includes(name)) {
        msg.innerHTML = "✅ Student Found";
        msg.style.color = "green";
    }
    else {
        msg.innerHTML = "❌ Student Not Found";
        msg.style.color = "red";
    }
}
// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}