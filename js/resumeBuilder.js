/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append('Hey there!');
 // var awesomeThougts = "I am OM prakash and i am awesome";
 // var funThoughts = awesomeThougts.replace("awesome","fun");
 // console.log(awesomeThougts); 
 // console.log(funThoughts);
 // var gmail = "prakash9266@gmail.com";
 // var live = gmail.replace("gmail","live");
 // console.log(gmail);
 // console.log(live);
 // ///
 // creating the header
 // var formattedName = HTMLheaderName.replace('%data%','Om Prakash');
 // var formattedRole = HTMLheaderRole.replace('%data%','Front End Developer');
 // $("#header").prepend(formattedRole);
 // $("#header").prepend(formattedName);
 // var s = "Domprakash";
 // var s = s[1].toUpperCase() + s.slice(2);
 // console.log(s);

 // bio object

var bio = {
	"name" : "Om Prakash",
	"role" : "Frot End Developer",
	"contact" : {
		"mobile" : 7738692657,
		"email" : "prakash9266@gmail.com",
		"github" : "thesharpshooter",
		"location" : "Mumbai"
	},
	"url" : "www.omprakash.com",
	"message" : "Hello sucker",
	"skills" : ['awesomeness','html','css','js','creating awesome Stuffs']
}
bio.state = "Maharashtra";


/// work object
var work = {
	"position" : "STUDENT",
	"employer" : {},
	"years" : 3,	
}
work.city = "Maharashtra";


// projects object

var project = {};

// appending the values


// $("#main").append(work["position"]);
// $("#main").append(edu.name);


// edu object using json notation 

var education = {
	"schools" : [
	{
		"name" : "DAV Public School Ara",
		"city" : "Ramgarh",
		"Major" : "Science",
		"Minor" : "Cs",
		"gradYear" : 2013

	},
	{
		"name" : "IIT Bombay",
		"city" : "Mumbai",
		"Major" : "MEMS",
		"Minor" : "nothing",
		"gradYear" : 2018

	}
	],
	"online courses" : [
	{
		"provider" : "coursera",
		"course" : "front end dev",
		"duration" : 0.3
	},
	{
		"provider" : "Udacity",
		"course" : "Machine learning",
		"duration" : 0.1
	}]
}

if (bio.lenght > 0 ) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data",bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkills);
}






