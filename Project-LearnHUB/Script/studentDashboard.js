
function showProfile(){
   document.getElementById("user-profile").style.display="block"
   document.getElementById("user-course").style.display = "none"
   document.getElementById("user-certificate").style.display = "none"
   document.getElementById("user-plans").style.display = "none"
}

function showCourses(){
   document.getElementById("user-profile").style.display="none"
   document.getElementById("user-course").style.display = "block"
   document.getElementById("user-certificate").style.display = "none"
   document.getElementById("user-plans").style.display = "none"
}
function showCertificate(){
   document.getElementById("user-profile").style.display="none"
   document.getElementById("user-course").style.display = "none"
   document.getElementById("user-certificate").style.display = "block"
   document.getElementById("user-plans").style.display = "none"
}
function showPlan(){
   document.getElementById("user-profile").style.display="none"
   document.getElementById("user-course").style.display = "none"
   document.getElementById("user-certificate").style.display = "none"
   document.getElementById("user-plans").style.display = "block"
}