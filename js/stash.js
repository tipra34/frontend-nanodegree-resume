//some junk collected in lesson 1

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.msg);
var formattedPic = HTMLbioPic.replace("%data%", bio.picUrl);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

var formattedSkills ="";
bio.skills.forEach(function(item, pos, array){
   formattedSkills += HTMLskills.replace("%data%",item); 
});



$("#header").append(formattedPic);

$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

$("#header").prepend(formattedMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedTwitter);


var work = {};
work.position = "some post";
work.employer = "some employer";
work.years = "some years";
work.city = "some city";

var education = {};
education["name"] = "APS";
education["years"] = ["2010", "2011", "2012"];
education["city"] = "kolkata";

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(work.position);

$("#education").append(HTMLschoolStart);
$(".education-entry").append(education.name);