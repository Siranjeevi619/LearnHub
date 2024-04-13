let currentCourseId = getUrlParameter("id");

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

var coursecontext = null;

for (let i = 0; i < courseContent.length; i++) {
    if (currentCourseId == courseContent[i].crs_id) {
        coursecontext = courseContent[i];
        break; 
    }
}

if (coursecontext !== null) {
    document.title = coursecontext.course_name
    document.getElementById('content1').innerText = coursecontext.content1;
    document.getElementById('content2').innerText = coursecontext.content2;
    document.getElementById('content3').innerText = coursecontext.content3;
    document.getElementById('content4').innerText = coursecontext.content4;
    document.getElementById('content5').innerText = coursecontext.content5;
    document.getElementById('question').innerText = coursecontext.content1;
    document.getElementById('answer').innerText = coursecontext.answer;
} else {
    console.log("Course not found");
}
