



let courseId = getUrlParameter("id");

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }   
    return false;
}

var course = null;
for(let i=0;i<CourseList.length;i++){
    if(courseId == CourseList[i].cr_id){
        course = CourseList[i];
    }
}

document.title =  course.name + "- overview"
document.getElementById('courseName').innerText = course.name;
document.getElementById('companyName').innerText = course.company;
document.getElementById('tutorName').innerText = course.tutor;
document.getElementById('courseInfo').innerText = course.aboutCourse;


function TakeLesson(num){
    window.open('./coursestudy.html'+ "?id=" +course.cr_id, "_self");
}

function enrollCourse(){
    document.getElementById('enrollCourse-popup').style.display = "block"
}

function FalseEnroll(){
    
}
function TrueEnroll(){
    alert("course  enroll successfully")
    document.getElementById('enrollCourse-popup').style.display = "none"
}