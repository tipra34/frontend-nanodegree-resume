var bio = {
    "name": "Arpit",
    "role": "Web Developer",
    "contacts": {
            "mobile": "555 5555 5555",
            "email": "tipra34@gmail.com",
            "twitter": "@tipra34"
        },
    "msg": "Hi I am Arpit and I am awesome",
    "picUrl": "http://4.bp.blogspot.com/-sq28d40cJ9c/UelBP4vxJPI/AAAAAAAAAqU/9ymH42-sDD4/s1600/sq6.jpg",
    "skills": ["JavaScript", "HTML", "CSS", "Python"]
};

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
