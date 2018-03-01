numSkills = 0;

$(document).ready(function(){
	loadBuild();
	document.getElementById("nav").style.width = "50px";
});

function tdClick(e)
{
	var s = document.getElementById("skills");
	var sc = document.getElementById("skillCont");
	
	if(e.classList.contains("success"))
	{
		e.classList.remove("success");
		numSkills--;
	}
	else
	{
		if(numSkills == 45)
		{
			return;
		}
		e.classList.add("success");
		numSkills++;
	}
	
	s.innerHTML = "Skills: " + numSkills + "/45";
	
	if(numSkills == 45)
	{
		sc.classList.add("panel-danger");
		sc.classList.remove("panel-success");
		return;
	}
	else
	{
		sc.classList.add("panel-success");
		sc.classList.remove("panel-danger");
	}
	
	saveBuild();
};

function saveBuild()
{
	var skills = "";
	
	var cells = document.getElementsByTagName('td');
	
	for (var i = 0; i < cells.length; i++) 
	{
		if(cells[i].classList.contains("success"))
			skills += cells[i].id + "|";
	}
	
	localStorage.setItem("skill", skills);
}

function loadBuild()
{
	var skills = localStorage.getItem("skill").split("|");
		
	for (var i = 0; i < skills.length -1; i++) 
	{
		var cell = document.getElementById(skills[i]);
		tdClick(cell);
	}
}

function toggleNav() 
{
    var nav = document.getElementById("nav");
	
	if(nav.style.width == "250px")
		nav.style.width = "50px";
	else nav.style.width = "250px";
}














