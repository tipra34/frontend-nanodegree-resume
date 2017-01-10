var bio = {
    "name": "Arpit",
    "role": "Web Developer",
    "contacts": {
            "mobile": "555 5555 5555",
            "email": "tipra34@gmail.com",
            "twitter": "@tipra34",
            "location": "pune"
        },
    "msg": "Hi I am Arpit and I am awesome",
    "picUrl": "images/fry.jpg",
    "skills": ["HTML", "CSS", "JavaScript", "Python"]
};
bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.msg);
    var formattedPic = HTMLbioPic.replace("%data%", bio.picUrl);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    $("#header").append(formattedPic);

    $("#header").prepend(formattedMsg);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedMobile);
    $("#topContacts").prepend(formattedTwitter);
    
    if(bio.skills.length){
                    $("#header").append(HTMLskillsStart);

                    bio.skills.forEach(function(item, pos, array){     
                     $("#skills").append(HTMLskills.replace("%data%",item)); 

                    }); 
                }
};


var work ={
	"jobs": [{
		"employer": "someone",
		"title": "some title",
		"location": "Kolkata",
		"date": "1 jan 2001 - 2 jan 2012",
		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}, {
		"employer": "someone",
		"title": "some title",
		"location": "Jammu",
		"date": "1 jan 2001 - 2 jan 2012",
		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}]
};
work.display = function(){
     work.jobs.forEach(function(job, pos, array){
        
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedJobTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedJobDates = HTMLworkDates.replace("%data%", job.date);
        var formattedJobDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedJobLocation = HTMLworkLocation.replace("%data%", job.location);
        
        $(".work-entry:last").append(formattedEmployer + formattedJobTitle + formattedJobDates + formattedJobLocation + formattedJobDescription);
    });
}


var projects = {
    "projects": [{
        "title": "some title",
        "date": "jan 20110",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "images": ["images/197x148.gif",
                   "images/197x148.gif",
                   "images/197x148.gif"]
    }, {
        "title": "some title",
        "date": "jan 20110",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "images": ["images/197x148.gif",
                   "images/197x148.gif",
                   "images/197x148.gif"]
    }, {
        "title": "some title",
        "date": "jan 20110",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "images": ["images/197x148.gif",
                   "images/197x148.gif",
                   "images/197x148.gif"]
    }
    ]
};
projects.display = function(){
    projects.projects.forEach(function(project){
       
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.date);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        
        var formattedProjectImage = "";
        
        if(project.images.length > 0)
        project.images.forEach(function(image){
            formattedProjectImage += HTMLprojectImage.replace("%data%",image);
        });
        
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedProjectImage);
    });
}


var education = {
	"schools": [],
	"onlineCourses": [{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": "jan 2017",
		"url": "https://classroom.udacity.com/courses/ud804"
	}, {
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"date": "jan 2017",
		"url": "https://classroom.udacity.com/courses/ud304"
	}]
};
education.display = function(){
    if(education.schools.length){
        education.schools.forEach(function(school){
            $("#education").append(HTMLschoolStart);
            var schoolName = HTMLschoolStart.replace("%data%", school.name);
            var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var schoolMajor = "";
            school.majors.forEach(function(major){
                schoolMajor += HTMLschoolMajor.replace("%data%", major);
            });
            
            $(".education-entry:last").append(schoolName + schoolDegree + schoolDates + schoolLocation + schoolMajor);
        });
    }
    
    if(education.onlineCourses.length){
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course){
            
            $("#education").append(HTMLschoolStart);

            var courseTitle = HTMLonlineTitle.replace("%data%", course.title);
            var courseSchool = HTMLonlineSchool.replace("%data%", course.school);
            var courseDates = HTMLonlineDates.replace("%data%", course.date);
            var courseUrl = HTMLonlineURL.replace("%data%", course.url);
            
            $(".education-entry:last").append(courseTitle + courseSchool + courseDates + courseUrl);
        });
    }
};



bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);