
$("#mapDiv").append(googleMap);



var bio = {  //object containing basic info about me!
	
	"name" : "George Armstrong",
	"role" : "Web Developer",
	"contacts" : { 
		"Phone": "(0666)-666-666-666",
		"email" : "0nlineGuy911@webmail.com",
		"twitter": "@420meninist",
		"location": "Wellington"
	},

	"greeting" : "Hi How are you?",
	"pic" : "images/unnamed.png",
	"Skills" : 

		["writing", " jokes", " running really fast."]
	
	};
 var education = {
 	"school" : [{
 		"name" : "St Andrews College",
 		"location" : "Christchurch",
 		"graduated" : "2010",
 		"desc" : "High School",
 		"major" : "NCEA BABY"
 	},
 	{
 		"name" : "University Of Canterbury",
 		"location" : "Christchurch",
 		"desc" : "Bachelor of Arts",
 		"major" : "English Literature"

 	},
 	{
 		"name" : "Victoria University of Wellington",
 		"location" : "Wellington",
 		"desc" : "Bachelor of Arts",
 		"major" : "English Literature",
 		"graduated" : "2014"
 	}
 	]
 }
 


var work = {
	"jobs" :[ {
		"employer": "car yard",
		"Title": "Car Cleaner",
		"location": "Christchurch",
		"Time" : "December 2007- January 2010",
		"desc" : "Menial job involving the cleaning and detailing of motorvehicles. I learned a lot about work and life from this job."
	},
	{
		"employer" : "wagamama",
		"Title" : "Waiter",
		"location" : "Wellington",
		"Time" : "January 2010 - April 2011",
		"desc" : "Worked as waiter/ bartender at the popular chain wagamama. Ate a lot of good food and was able to work around my university schedule. Was promoted to Team Leader which entitled me to 50c extra per hour and a different colored tshirt."
	},
	{
		"employer" : "Bike Shop",
		"Title" : "Warehouse Boy",
		"location" : "Wellington",
		"Time" : "April 2011 - September 2014",
		"desc" : "Performed a variety of roles for a small distributorof imported biking goods. Roles included : Admin, repairs, sales and distribution."
	}
	]
	};

var projects = {
		projs : [ 
	{
		"title" : "Make a resume with javascript",
		"date" : "2016",
		"desc" : "Project involved using javascript to design a website that would display my resume",
		"image" : "images/bizson.png"
	},
	 {
		"title" : "Javascript racer",
		"date" : "2016",
		"desc" : "make a racing game using javascript",
		"image" : "images/soniccar.jpg"
	}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);

$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").append(formattedRole);

var formattedcontactsPhone = HTMLmobile.replace("%data%", bio.contacts.Phone);
var formattedcontactsemail = HTMLemail.replace("%data%",bio.contacts.email);

var formattedPic = HTMLbioPic.replace("%data%", bio.pic)
$("#header").append(formattedPic);
//$("#main").append(internationalizeButton);

projects.display = function(){
	for (var projs in projects.projs){
		$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projs[projs].title);
		$(".project-entry:last").append(formattedTitle);
	var formattedDate = HTMLprojectDates.replace("%data%", projects.projs[projs].date);
		$(".project-entry:last").append(formattedDate);
	var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projs[projs].desc);
		$(".project-entry:last").append(formattedDesc);
	var formattedPic = HTMLprojectImage.replace("%data%", projects.projs[projs].image);
		$(".project-entry:last").append(formattedPic);

	}
}
projects.display();

function inName(Name){
	var intname = bio.name;
	var space = intname.search(" ");
	var firstLetter = intname[0].toUpperCase();
	var firstName = firstLetter + intname.substring(0, space).slice(1).toLowerCase();
	var surname = bio.name.substring(space, intname.length).toUpperCase();
	var newname = firstName + " " + surname;
	console.log(newname);
	var formattedIntName = HTMLheaderName.replace("name", newname);
	$("#header").append(newname);

	
}


if (bio.Skills.length > 0){

var formattedSkills = HTMLskills.replace("%data%", bio.Skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);


}
function displayEducation(){
	for(var schools in education.school){
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%", education.school[schools].name);
		var formattedloc = HTMLschoolLocation.replace("%data%", education.school[schools].location);
		var formatteddesc = HTMLschoolDegree.replace("%data%", education.school[schools].desc);
		var formattedgrad = HTMLschoolDates.replace("%data%", education.school[schools].grad);
		var formattedmajor = HTMLschoolMajor.replace("%data%", education.school[schools].major);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedloc);
		$(".education-entry:last").append(formatteddesc);

		
		$(".education-entry:last").append(formattedmajor);
		console.log(formattedSchool)
	}
}

function displayWork(){
for(var job in work.jobs){ // If work object contains previous jobs, add these to the page.
	
	$("#workExperience").append(HTMLworkStart);
	var formattedEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].Title);
	var formattedEmpTitle = formattedEmp + formattedTitle;
	var formattedTime = HTMLworkDates.replace("%data%", work.jobs[job].Time);
	var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].desc)
	var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location)

	$(".work-entry:last").append(formattedEmpTitle);

	$(".work-entry:last").append(formattedTime);
	$(".work-entry:last").append(formattedLoc);
	$(".work-entry:last").append(formattedDesc);
		
	}
}
displayWork();
displayEducation();

$(document).click(function(loc) {
  var x  = loc.pageX;
  var y = loc.pageY;

 logClicks(x,y);
});





$("#topContacts").append(formattedcontactsPhone);
$("#topContacts").append(formattedcontactsemail);






